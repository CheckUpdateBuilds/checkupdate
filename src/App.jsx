import { Route, Routes } from 'react-router-dom';
import './App.css' 
// import LoginSignUp from './Components/LoginSignUp/LoginSignUp'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Sports from './pages/Sports';
import Entertainment from './pages/Entertainment';
import Education from './pages/Education'
import Lifestyle from './pages/Lifestyle'
import Politics from './pages/Politics'
import Business from './pages/Business'
import ScienceTech from './pages/ScienceTech'
import Culture from './pages/CultureReligion'
import Earth from './pages/EarthWildlife'
import Opportunities from './pages/Opportunities'
import CheckUpdateAwards from './pages/CheckUpdateAwards'
import NotFound from './pages/NotFound'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Ads from './Components/Ads';
import Subscribe from './Components/Subscribe';
// import LoginSignUp from './pages/LoginSignUp'



function App() {

  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <div className="bg-transparent block h-[162px] lg:hidden " ></div>
      <Ads/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/entertainment' element={<Entertainment/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/lifestyle' element={<Lifestyle/>} />
        <Route path='/politics' element={<Politics/>} />
        <Route path='/business' element={<Business/>} />
        <Route path='/science' element={<ScienceTech/>} />
        <Route path='/culture' element={<Culture/>} />
        <Route path='/earth' element={<Earth/>} />
        <Route path='/opportunities' element={<Opportunities/>} />
        <Route path='/awards' element={<CheckUpdateAwards/>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
      <Subscribe/>
      <Ads/>
      <Footer/>
      
    
    
    </div>
  )
}

export default App
