import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/siderbar';
import { AuthContext } from '../../context/authContext';

export function AppLayout() {
  const location = useLocation();
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? (
    <div className="bg-zinc-50">
      <Sidebar />

      <div className="ml-72 relative h-screen">
        <Header />

        <div className="px-8 pt-24">{<Outlet />}</div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
