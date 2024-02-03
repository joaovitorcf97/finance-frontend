import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './hooks/UserContext';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
