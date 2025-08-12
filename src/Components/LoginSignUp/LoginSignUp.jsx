import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { loginWithEmail, registerWithEmail } from '../../services/authService';

const LoginSignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      if (isLogin) {
        // Login logic
        const response = await loginWithEmail(email, password);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userEmail', email);
        navigate('/');
      } else {
        // Registration logic
        const name = nameRef.current.value;
        const response = await registerWithEmail(email, password, name);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userEmail', email);
        navigate('/');
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col items-center pt-5 px-4 flex-grow">
        <h2 className="text-2xl font-semibold text-center mb-5">
          {isLogin ? 'Log in to your account' : 'Create a new account'}
        </h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <button className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200">
            <FontAwesomeIcon className='mr-2' icon={faGoogle} /> Continue with Google
          </button>
          <button className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200">
            <FontAwesomeIcon className='mr-2' icon={faFacebook} /> Continue with Facebook
          </button>
          <button className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200">
            <FontAwesomeIcon className='mr-2' icon={faXTwitter} /> Continue with X
          </button>
          <button className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200">
            <FontAwesomeIcon className='mr-2' icon={faApple} /> Continue with Apple
          </button>
        </div>

        <div className="my-5 text-center text-gray-600">
          -- Or {isLogin ? 'log in' : 'sign up'} with your email --
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          {!isLogin && (
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded-full hover:text-lg bg-white"
              placeholder="Your name"
              type="text"
              ref={nameRef}
              required
            />
          )}
          
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-full hover:text-lg bg-white"
            placeholder="Enter your email address"
            type="email"
            ref={emailRef}
            required
          />
          
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-full hover:text-lg bg-white"
            placeholder="Enter your password"
            type="password"
            ref={passwordRef}
            required
            minLength="6"
          />

          <div className="text-center text-black mb-4">
            By continuing, you agree to the
            <Link to="#" className="text-companyRed"> T&amp;C </Link>
            &amp;
            <Link to="#" className="text-companyRed"> Privacy Policy </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-companyRed text-white rounded-full hover:bg-red-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              'Processing...'
            ) : isLogin ? (
              'Log In'
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        <button
          onClick={toggleAuthMode}
          className="mt-4 text-companyRed hover:underline"
        >
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignUp;