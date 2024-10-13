import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const basename = window.location.pathname.split('/')[1]; // Get the current URL path
// const basename = process.env.PUBLIC_URL;

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);


// root.render(
//   <StrictMode>
//     <BrowserRouter basename={basename}>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );