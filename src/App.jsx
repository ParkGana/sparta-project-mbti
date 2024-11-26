import { AuthProvider } from './contexts/AuthContext';
import Router from './routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
