import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { LoggedUserType } from '../services/types';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const loggedUser: LoggedUserType = JSON.parse(localStorage.getItem('loggedUser') || JSON.stringify({ jwt: '' }));
  loggedUser.role = Number(loggedUser.role);
  if (loggedUser.role == 5) return <Navigate to="/admin" replace />
  if (loggedUser.role == 1) return <Navigate to="/seller" replace />
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {/* {!!loggedUser.role && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />} */}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
