import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">로그인</p>
                <AuthForm category="signin" label="로그인" />
                <div className="flex gap-4">
                    <p className="text-base text-black">계정이 없으신가요?</p>
                    <Button category="text" label="회원가입" handleClick={() => navigate('/signup')} />
                </div>
            </div>
        </div>
    );
}
