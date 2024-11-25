import Button from './Button';

export default function AuthForm({ category, label, data, handleChange, handleSubmit }) {
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {['signup', 'signin'].includes(category) && (
                <input
                    className="w-80 border border-gray-300 rounded p-2 text-base text-black"
                    type="text"
                    name="id"
                    autoComplete="off"
                    placeholder="아이디"
                    value={data?.id}
                    onChange={handleChange}
                />
            )}

            {['signup', 'signin'].includes(category) && (
                <input
                    className="w-80 border border-gray-300 rounded p-2 text-base text-black"
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="비밀번호"
                    value={data?.password}
                    onChange={handleChange}
                />
            )}

            {['signup', 'profile'].includes(category) && (
                <input
                    className="w-80 border border-gray-300 rounded p-2 text-base text-black"
                    type="text"
                    name="nickname"
                    autoComplete="off"
                    placeholder="닉네임"
                    value={data?.nickname}
                    onChange={handleChange}
                />
            )}

            <Button category="form" label={label} />
        </form>
    );
}
