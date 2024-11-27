import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';
import { useForm } from '../hooks/useForm';
import { signupAPI } from '../api/Auth';
import { fireErrorSwal, fireSuccessSwal } from '../utils/fireSwal';

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

        const { data, error } = await signupAPI(values);

        if (error) {
            fireErrorSwal(error);
        } else if (data.success) {
            fireSuccessSwal({
                text: '회원가입에 성공했습니다.',
                afterConfirm: () => navigate('/signin')
            });
        } else {
            fireErrorSwal('회원가입에 실패했습니다.');
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
