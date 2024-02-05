import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { UserProvider } from './hooks/UserContext';
import { queryClient } from './lib/reactQuery';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}

export default App;
