import AuthForm from '../components/AuthForm';
import { updateUserAPI } from '../api/Auth';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from '../hooks/useForm';

export default function Profile() {
    const token = localStorage.getItem('accessToken');

    const { user } = useAuth();

    const { values, handleChange } = useForm({
        nickname: user?.nickname
    });

    /* 사용자 정보 수정 */
    const handleUpdateUser = async (e) => {
        e.preventDefault();

        const { data, error } = await updateUserAPI(token, values);

        if (error) {
            window.alert(error);
        } else if (data.success) {
            window.alert('사용자 정보가 수정되었습니다.');
            window.location.reload();
        } else {
            window.alert('사용자 정보를 수정하지 못했습니다.');
        }
    };

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">프로필</p>
                <p className="text-base text-black">닉네임을 수정할 수 있습니다.</p>
                <AuthForm
                    category="profile"
                    label="프로필 수정"
                    data={values}
                    handleChange={handleChange}
                    handleSubmit={handleUpdateUser}
                />
            </div>
        </div>
    );
}
