import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const { isAuthenticated, logout } = useAuth();

    /* 로그아웃 */
    const handleSignOut = () => {
        logout();
        navigate('/signin');
    };

    return (
        <div className="sticky top-0 z-10 flex justify-center items-center bg-white shadow-lg p-6">
            <div className="w-full max-w-screen-xl flex justify-between items-center">
                <p className="text-3xl text-primary font-bold cursor-pointer" onClick={() => navigate('/')}>
                    MBTI
                </p>
                <div className="flex items-center gap-8">
                    {isAuthenticated ? (
                        <>
                            <Button category="text" label="프로필" handleClick={() => navigate('/profile')} />
                            <Button category="text" label="테스트" handleClick={() => navigate('/test')} />
                            <Button category="text" label="결과" handleClick={() => navigate('/result')} />
                            <Button category="box" label="로그아웃" handleClick={handleSignOut} />
                        </>
                    ) : (
                        <>
                            {pathname === '/' && (
                                <Button category="box" label="로그인" handleClick={() => navigate('/signin')} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
