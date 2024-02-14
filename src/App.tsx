import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/authContext';
import { queryClient } from './lib/reactQuery';
import { routes } from './routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}

export default App;
