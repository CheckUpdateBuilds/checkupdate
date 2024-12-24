import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import companyLogo from '../Assets/logo1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';

const LoginSignUp = () => {
  const emailref = useRef(null);
  const navigate = useNavigate();

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const email = emailref.current.value;
    localStorage.setItem('userEmail', email);
    navigate('/');
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <div className="bg-gray-100 py-4">
          <div className="flex justify-center">
            <img src={companyLogo} alt="Company Logo" className="h-20 w-20" />
          </div>
        </div> */}

        <div className="flex flex-col items-center pt-5 px-4 flex-grow">
          <h2 className="text-2xl font-semibold text-center mb-5">
            Log in or sign up to enhance your CheckUpdate experience.
          </h2>
          <div className="flex flex-col space-y-4 w-full max-w-sm">
            <a className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200 hover:text-lg " href="#">
              <FontAwesomeIcon className='mr-2' icon={faGoogle} /> Continue with Google
            </a>
            <a className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200 hover:text-lg" href="#" aria-label='Continue with Facebook'>
              <FontAwesomeIcon className='mr-2' icon={faFacebook} /> Continue with Facebook
            </a>
            <a className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200 hover:text-lg" href="#">
              <FontAwesomeIcon className='mr-2' icon={faXTwitter} /> Continue with X
            </a>
            <a className="flex items-center justify-center py-2 px-4 bg-slate-100 h-14 text-black rounded-full hover:bg-slate-200 hover:text-lg" href="#">
              <FontAwesomeIcon className='mr-2' icon={faApple} /> Continue with Apple
            </a>
          </div>

          <div className="my-5 text-center text-gray-600">
            -- Or sign in with your email address --
          </div>

          <input className='w-full max-w-sm py-2 px-4 border border-gray-300 rounded-full hover:text-lg bg-companyWhite mb-4' placeholder='Enter your email address' type="email" ref={emailref} />

          <div className="text-center text-black mb-4">
            By continuing, you agree to the
            <Link to={"#"} className="text-companyRed"> T&amp;C </Link>
            &amp;
            <Link to={"#"} className="text-companyRed"> Privacy Policy </Link>
          </div>

          <button className='py-2 px-4 bg-companyRed text-white rounded-full ' onClick={handleEmailSubmit}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;