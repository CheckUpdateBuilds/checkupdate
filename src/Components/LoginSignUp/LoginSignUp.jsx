import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faXTwitter, faEye, faEyeSlash } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import SocialAuthButtons from '../SocialAuthButtons';


const LoginSignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState({
    google: false,
    facebook: false,
    twitter: false,
    apple: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    name: ''
  });

  // Handle redirect if coming from protected route
  const from = location.state?.from?.pathname || '/';

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && !nameRef.current.value) {
      errors.name = 'Name is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError('');
    setSuccess('');

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      let response;
      if (isLogin) {
        response = await authService.loginWithEmail(email, password);
        setSuccess('Login successful! Redirecting...');
      } else {
        const name = nameRef.current.value;
        response = await authService.registerWithEmail(email, password, name);
        setSuccess('Registration successful! Redirecting...');
      }
      
      // Small delay to show success message
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setSocialLoading(prev => ({ ...prev, [provider]: true }));
    setError('');
    setSuccess('');

    try {
      // In a real app, you would implement proper social auth
      // This is just a mock implementation
      let response;
      switch (provider) {
        case 'google':
          // Implement actual Google auth
          // response = await authService.authenticateWithGoogle(accessToken);
          break;
        case 'facebook':
          // Implement actual Facebook auth
          break;
        // Other providers...
      }

      setSuccess(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login successful!`);
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    } catch (err) {
      setError(err.message || `Failed to login with ${provider}`);
    } finally {
      setSocialLoading(prev => ({ ...prev, [provider]: false }));
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setFormErrors({
      email: '',
      password: '',
      name: ''
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {isLogin ? 'Sign in to your account' : 'Create a new account'}
            </h2>
          </div>

          {/* Success and Error Messages */}
          {success && (
            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
              {success}
            </div>
          )}
          {error && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          {/* Social Login Buttons */}
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleSocialLogin('google')}
              disabled={socialLoading.google}
              className={`w-full flex items-center justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                socialLoading.google 
                  ? 'bg-gray-100 text-gray-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              {socialLoading.google ? 'Processing...' : 'Google'}
            </button>

            <button
              onClick={() => handleSocialLogin('facebook')}
              disabled={socialLoading.facebook}
              className={`w-full flex items-center justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                socialLoading.facebook 
                  ? 'bg-gray-100 text-gray-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              {socialLoading.facebook ? 'Processing...' : 'Facebook'}
            </button>

            <button
              onClick={() => handleSocialLogin('twitter')}
              disabled={socialLoading.twitter}
              className={`w-full flex items-center justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                socialLoading.twitter 
                  ? 'bg-gray-100 text-gray-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FontAwesomeIcon icon={faXTwitter} className="mr-2" />
              {socialLoading.twitter ? 'Processing...' : 'Twitter'}
            </button>

            <button
              onClick={() => handleSocialLogin('apple')}
              disabled={socialLoading.apple}
              className={`w-full flex items-center justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium ${
                socialLoading.apple 
                  ? 'bg-gray-100 text-gray-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FontAwesomeIcon icon={faApple} className="mr-2" />
              {socialLoading.apple ? 'Processing...' : 'Apple'}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  ref={nameRef}
                  required
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                    formErrors.name ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                  placeholder="Full name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                ref={emailRef}
                required
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  formErrors.email ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={isLogin ? "current-password" : "new-password"}
                ref={passwordRef}
                required
                minLength="6"
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                  formErrors.password ? 'border-red-300' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                  className="h-5 w-5 text-gray-500 hover:text-gray-700" 
                />
              </button>
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link 
                    to="/forgot-password" 
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                  isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : isLogin ? (
                  'Sign in'
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button 
                  onClick={toggleAuthMode}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button 
                  onClick={toggleAuthMode}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </button>
              </>
            )}
          </div>

          <div className="text-center text-xs text-gray-500">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-gray-700">Terms of Service</Link>{' '}
            and{' '}
            <Link to="/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;