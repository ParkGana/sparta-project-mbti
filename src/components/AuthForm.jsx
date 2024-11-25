import Button from './Button';

export default function AuthForm({ category, label }) {
    return (
        <form className="flex flex-col gap-4" onSubmit={() => {}}>
            {['signup', 'signin'].includes(category) && (
                <input
                    className="w-80 border border-gray-300 rounded p-2 text-base text-black"
                    type="text"
                    placeholder="아이디"
                    value=""
                    onChange={() => {}}
                />
            )}

            {['signup', 'signin'].includes(category) && (
                <input
                    className="w-80 border border-gray-300 rounded p-2 text-base text-black"
                    type="password"
                    placeholder="비밀번호"
                    value=""
                    onChange={() => {}}
                />
            )}

            {['signup', 'profile'].includes(category) && (
                <input
                    className="w-80 border border-gray-300 rounded p-2 text-base text-black"
                    type="text"
                    placeholder="닉네임"
                    value=""
                    onChange={() => {}}
                />
            )}

            <Button category="form" label={label} />
        </form>
    );
}
