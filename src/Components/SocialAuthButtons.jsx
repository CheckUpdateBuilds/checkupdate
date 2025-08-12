// src/components/SocialAuthButtons.jsx
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import AppleSignin from 'apple-signin-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faXTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import authService from '../../services/authService';

const SocialAuthButtons = ({ onSuccess, onError }) => {
  // Google Success Handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await authService.authenticateWithGoogle(credentialResponse.credential);
      onSuccess(response, 'google');
    } catch (error) {
      onError(error, 'google');
    }
  };

  // Google Error Handler
  const handleGoogleError = () => {
    onError(new Error('Google login failed'), 'google');
  };

  // Facebook Success Handler
  const handleFacebookSuccess = async (response) => {
    try {
      const authResponse = await authService.authenticateWithFacebook(response.accessToken);
      onSuccess(authResponse, 'facebook');
    } catch (error) {
      onError(error, 'facebook');
    }
  };

  // Twitter Success Handler
  const handleTwitterSuccess = async (response) => {
    try {
      const authResponse = await authService.authenticateWithTwitter(
        response.oauth_access_token,
        response.oauth_access_token_secret
      );
      onSuccess(authResponse, 'twitter');
    } catch (error) {
      onError(error, 'twitter');
    }
  };

  // Apple Success Handler
  const handleAppleSuccess = async (response) => {
    try {
      const { authorization } = response;
      const authResponse = await authService.authenticateWithApple(
        authorization.id_token,
        authorization.user
      );
      onSuccess(authResponse, 'apple');
    } catch (error) {
      onError(error, 'apple');
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Google Login */}
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          render={({ onClick }) => (
            <button
              onClick={onClick}
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </button>
          )}
        />
      </GoogleOAuthProvider>

      {/* Facebook Login */}
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={handleFacebookSuccess}
        render={({ onClick }) => (
          <button
            onClick={onClick}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            Facebook
          </button>
        )}
      />

      {/* Twitter Login - Note: Twitter API v2 requires different approach */}
      <a
        href={`${process.env.REACT_APP_API_BASE_URL}/auth/twitter`}
        className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
      >
        <FontAwesomeIcon icon={faXTwitter} className="mr-2" />
        Twitter
      </a>

      {/* Apple Login */}
      <button
        onClick={() => {
          AppleSignin.signIn({
            clientId: process.env.REACT_APP_APPLE_SERVICE_ID,
            scope: 'email name',
            redirectURI: window.location.origin + '/auth/apple/callback',
            state: 'state', // Optional, for CSRF protection
            usePopup: true
          })
          .then(handleAppleSuccess)
          .catch(error => onError(error, 'apple'));
        }}
        className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
      >
        <FontAwesomeIcon icon={faApple} className="mr-2" />
        Apple
      </button>
    </div>
  );
};

export default SocialAuthButtons;