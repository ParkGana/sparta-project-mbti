import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 z-10 flex justify-between items-center bg-white shadow-lg p-6">
            <p className="text-3xl text-primary font-bold cursor-pointer" onClick={() => navigate('/')}>
                MBTI
            </p>
            <div className="flex items-center gap-8">
                <Button category="text" label="프로필" handleClick={() => navigate('/profile')} />
                <Button category="text" label="테스트" handleClick={() => navigate('/test')} />
                <Button category="text" label="결과" handleClick={() => navigate('/result')} />
                <Button category="box" label="로그아웃" handleClick={() => navigate('/signin')} />
                <Button category="box" label="로그인" handleClick={() => navigate('/signin')} />
            </div>
        </div>
    );
}
