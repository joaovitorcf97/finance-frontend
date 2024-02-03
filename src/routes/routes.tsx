import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../page/_layouts/app';
import { AuthLayout } from '../page/_layouts/auth';
import { Dashboard } from '../page/dashboard/dashboard';
import { LoginPage } from '../page/login/loginPage';
import { WithLoggedIn } from './withLoggedIn';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={WithLoggedIn(AppLayout)()}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
