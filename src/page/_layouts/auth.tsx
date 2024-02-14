import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="flex justify-center items-center bg-cyan-600 min-h-screen antialiased">
      {<Outlet />}
    </div>
  );
}
