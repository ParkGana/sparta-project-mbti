import AuthForm from '../components/AuthForm';

export default function Profile() {
    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-4 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">프로필</p>
                <p className="text-base text-black">닉네임을 수정할 수 있습니다.</p>
                <AuthForm category="profile" label="프로필 수정" />
            </div>
        </div>
    );
}
