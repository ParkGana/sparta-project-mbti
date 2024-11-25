import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AuthenticatedRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate to="/signin" replace />;

    return <Outlet />;
}
