import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';
import { useForm } from '../hooks/useForm';
import { signinAPI } from '../api/Auth';
import { useAuth } from '../contexts/AuthContext';
import { fireErrorSwal, fireSuccessSwal } from '../utils/fireSwal';

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

        const { data, error } = await signinAPI(values);

        if (error) {
            fireErrorSwal(error);
        } else if (data.success) {
            fireSuccessSwal({
                text: '로그인에 성공했습니다.',
                afterConfirm: async () => {
                    await login(data.accessToken);
                    navigate('/');
                }
            });
        } else {
            fireErrorSwal('로그인에 실패했습니다.');
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
