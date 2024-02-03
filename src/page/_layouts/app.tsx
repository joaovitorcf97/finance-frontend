import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return <div>Header {<Outlet />}</div>;
}
