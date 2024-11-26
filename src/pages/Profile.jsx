import { useEffect, useState } from 'react';
import AuthForm from '../components/AuthForm';
import { fetchUser, updateUser } from '../api/Auth';

export default function Profile() {
    const token = localStorage.getItem('accessToken');

    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const { data, error } = await fetchUser(token);

            // 오류 발생
            if (error) {
                window.alert(`${error.status} 오류가 발생했습니다.`);
            }
            // 성공
            else if (data.success) {
                setNickname(data.nickname);
            }
            // 실패
            else {
                window.alert('유저 정보를 불러오지 못했습니다.');
            }
        };

        fetchUserData();
    }, [token]);

    /* 프로필 수정 */
    const handleUpdateUser = async () => {
        const { data, error } = await updateUser(token, { nickname });

        // 오류 발생
        if (error) {
            window.alert(`${error.status} 오류가 발생했습니다.`);
        }
        // 성공
        else if (data.success) {
            window.alert('프로필이 수정되었습니다.');
            window.location.reload();
        }
        // 실패
        else {
            window.alert('유저 정보를 불러오지 못했습니다.');
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
                    data={{ nickname }}
                    handleChange={(e) => setNickname(e.target.value)}
                    handleSubmit={handleUpdateUser}
                />
            </div>
        </div>
    );
}
