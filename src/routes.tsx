import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './page/_layouts/app';
import { AuthLayout } from './page/_layouts/auth';
import { BookDiary } from './page/bookDiary/bookDiary';
import { Dashboard } from './page/dashboard/dashboard';
import { LoginPage } from './page/login/loginPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'livro-diario', element: <BookDiary /> },
      { path: 'fluxo-de-caixa', element: <h1>Fluxo de caixa</h1> },
      { path: 'comparador', element: <h1>Comparador</h1> },
      { path: 'bancos', element: <h1>Bancos</h1> },
      { path: 'empresas', element: <h1>Empresas</h1> },
      { path: 'usuarios', element: <h1>Usuarios</h1> },
      { path: 'meu-perfil', element: <h1>Meu Perfil</h1> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: 'login', element: <LoginPage /> }],
  },
]);
