import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';
import { useForm } from '../hooks/useForm';
import { runSignIn } from '../api/MoneyfulPublicPolicy';
import { useAuth } from '../contexts/AuthContext';

export default function SignIn() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const { values, handleChange } = useForm({
        id: '',
        password: ''
    });

    /* 로그인 */
    const handleSignIn = async (e) => {
        e.preventDefault();

        const { data, error } = await runSignIn(values);

        // 오류 발생
        if (error) {
            window.alert(`${error.status} 오류가 발생했습니다.`);
        }
        // 성공
        else if (data.success) {
            window.alert('로그인에 성공했습니다.');
            login(data.accessToken);
            navigate('/');
        }
        // 실패
        else {
            window.alert('로그인에 실패했습니다.');
        }
    };

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">로그인</p>
                <AuthForm
                    category="signin"
                    label="로그인"
                    data={values}
                    handleChange={handleChange}
                    handleSubmit={handleSignIn}
                />
                <div className="flex gap-4">
                    <p className="text-base text-black">계정이 없으신가요?</p>
                    <Button category="text" label="회원가입" handleClick={() => navigate('/signup')} />
                </div>
            </div>
        </div>
    );
}
