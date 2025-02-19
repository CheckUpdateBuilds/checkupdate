import { Outlet } from 'react-router-dom'
import Header from '../Components/Admin/Header'
import Sidebar from '../Components/Admin/sidebar'
import Dashboard from '../pages/Admin/AdminDashboard'


const AdminLayout = () => {
    return (
        <div className="admin-settings">
            <Sidebar />
            <div className="content">
                <Header />
                <div>
                    <Outlet />
                </div>
            </div> 
  </div>
    )
}



export default AdminLayout