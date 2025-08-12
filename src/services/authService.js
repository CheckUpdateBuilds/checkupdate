// src/services/authService.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Handles API requests with proper error handling
 * @param {string} endpoint - API endpoint
 * @param {string} method - HTTP method
 * @param {object} body - Request body
 * @param {object} headers - Additional headers
 * @returns {Promise} - Resolves with response data
 */
const makeRequest = async (endpoint, method = 'GET', body = null, headers = {}) => {
  try {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      // Handle specific error messages from server if available
      const errorMessage = data.message || 
                          data.error || 
                          `Request failed with status ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error(`API request error (${endpoint}):`, error);
    throw error;
  }
};

// Auth Token Management
const getAuthToken = () => localStorage.getItem('authToken');
const setAuthToken = (token) => localStorage.setItem('authToken', token);
const removeAuthToken = () => localStorage.removeItem('authToken');

// User Management
const setUserData = (userData) => localStorage.setItem('userData', JSON.stringify(userData));
const getUserData = () => JSON.parse(localStorage.getItem('userData'));
const removeUserData = () => localStorage.removeItem('userData');

// Authentication Services
export const authService = {
  // Email/Password Authentication
  async loginWithEmail(email, password) {
    const data = await makeRequest('/auth/login', 'POST', { email, password });
    setAuthToken(data.token);
    setUserData(data.user);
    return data;
  },

  async registerWithEmail(email, password, name) {
    const data = await makeRequest('/auth/register', 'POST', { email, password, name });
    setAuthToken(data.token);
    setUserData(data.user);
    return data;
  },

  async verifyEmail(token) {
    return await makeRequest(`/auth/verify-email?token=${token}`);
  },

  async requestPasswordReset(email) {
    return await makeRequest('/auth/request-password-reset', 'POST', { email });
  },

  async resetPassword(token, newPassword) {
    return await makeRequest('/auth/reset-password', 'POST', { token, newPassword });
  },

  // Social Authentication
  async authenticateWithGoogle(accessToken) {
    const data = await makeRequest('/auth/google', 'POST', { accessToken });
    setAuthToken(data.token);
    setUserData(data.user);
    return data;
  },

  async authenticateWithFacebook(accessToken) {
    const data = await makeRequest('/auth/facebook', 'POST', { accessToken });
    setAuthToken(data.token);
    setUserData(data.user);
    return data;
  },

  // Session Management
  async getCurrentUser() {
    const token = getAuthToken();
    if (!token) return null;

    try {
      return await makeRequest('/auth/me', 'GET', null, {
        Authorization: `Bearer ${token}`,
      });
    } catch (error) {
      // If token is invalid, clear it
      if (error.message.includes('401')) {
        this.logout();
      }
      throw error;
    }
  },

  // Logout
  logout() {
    removeAuthToken();
    removeUserData();
  },

  // Token Refresh
  async refreshToken() {
    const token = getAuthToken();
    if (!token) return null;

    try {
      const data = await makeRequest('/auth/refresh', 'POST', null, {
        Authorization: `Bearer ${token}`,
      });
      setAuthToken(data.token);
      return data.token;
    } catch (error) {
      this.logout();
      throw error;
    }
  },

  // Utility methods
  isAuthenticated() {
    return !!getAuthToken();
  },

  getAuthHeader() {
    const token = getAuthToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};

export default authService;