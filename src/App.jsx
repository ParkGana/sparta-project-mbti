import { AuthProvider } from './contexts/AuthContext';
import Router from './routers/Router';

function App() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}

export default App;
