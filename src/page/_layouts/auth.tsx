import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="grid min-h-screen antialiased grid-cols-3">
      <div className="flex h-full flex-col col-span-2 justify-between border-r border-foreground/5 p-10 bg-[url('/src/assets/bg.jpg')] bg-cover"></div>
      <div className="flex items-center justify-center bg-white p-10">
        {<Outlet />}
      </div>
    </div>
  );
}
