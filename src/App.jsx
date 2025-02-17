import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
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
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import ScrollToTop from './Components/ScrollToTop';
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ContentManagement from "./pages/Admin/ContentManagement";
import UserManagement from "./pages/Admin/UserManagement";
import Analytics from "./pages/Admin/Analytics";
import AdminSettings from "./pages/Admin/AdminSetting";
import EditorsDashboard from './pages/Editor/Dashboard';
import EditorsArticle from './pages/Editor/My Articles';
import ArticlePerformance from './pages/Editor/Article Performance';
import CreateArticle from './pages/Editor/Create Article';
import { MdAdminPanelSettings } from 'react-icons/md';
import AdminLayout from './layout/AdminLayout';
import EditorsLayout from './layout/EditorsLayout';

function App() {
  const location = useLocation();


  return (
    <div className='overflow-hidden'>
      {/* Conditionally render Navbar, Ads, and Footer based on the current path */}
      {location.pathname == 'Admin/' && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/education' element={<Education />} />
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path='/politics' element={<Politics />} />
        <Route path='/business' element={<Business />} />
        <Route path='/science' element={<ScienceTech />} />
        <Route path='/culture' element={<Culture />} />
        <Route path='/earth' element={<Earth />} />
        <Route path='/opportunities' element={<Opportunities />} />
        <Route path='/awards' element={<CheckUpdateAwards />} />
        <Route path='/login' element={<LoginSignUp />} />
        <Route path='*' element={<NotFound />} />
        <Route path='Admin' element={<AdminLayout />}>
          <Route path="Dashboard" element={<AdminDashboard />} />
          <Route path="ContentManagement" element={<ContentManagement />} />
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Settings" element={<AdminSettings />} />
        </Route>
        <Route path='Editor' element={<EditorsLayout />}>
          <Route path="Dashboard" element={<EditorsDashboard />} />
          <Route path="Articles" element={<EditorsArticle />} />
          <Route path="ArticlePerformance" element={<ArticlePerformance />} />
          <Route path="CreateArticle" element={<CreateArticle />} />
        </Route>
      </Routes>
      {/* Conditionally render Ads and Footer based on the current path */}
      {location.pathname == 'Admin/' && <Ads />}
      {location.pathname == 'Admin/' && <Footer />}
    </div>
  );
}

export default App;