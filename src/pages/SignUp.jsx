import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';
import { useForm } from '../hooks/useForm';
import { runSignUp } from '../api/MoneyfulPublicPolicy';

export default function SignUp() {
    const navigate = useNavigate();

    const { values, handleChange } = useForm({
        id: '',
        password: '',
        nickname: ''
    });

    /* 회원가입 */
    const handleSignUp = async (e) => {
        e.preventDefault();

        const { data, error } = await runSignUp(values);

        // 오류 발생
        if (error) {
            window.alert(`${error.status} 오류가 발생했습니다.`);
        }
        // 성공
        else if (data.success) {
            window.alert('회원가입에 성공했습니다.');
            navigate('/signin');
        }
        // 실패
        else {
            window.alert('회원가입에 실패했습니다.');
        }
    };

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">회원가입</p>
                <AuthForm
                    category="signup"
                    label="회원가입"
                    data={values}
                    handleChange={handleChange}
                    handleSubmit={handleSignUp}
                />
                <div className="flex gap-4">
                    <p className="text-base text-black">이미 계정이 있으신가요?</p>
                    <Button category="text" label="로그인" handleClick={() => navigate('/signin')} />
                </div>
            </div>
        </div>
    );
}
