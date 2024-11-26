export default function Button({ category, label, handleClick }) {
    return (
        <>
            {category === 'form' && (
                <button className="w-full bg-primary rounded-lg text-base text-white p-2">{label}</button>
            )}

            {category === 'text' && (
                <p className="text-base text-primary cursor-pointer" onClick={handleClick}>
                    {label}
                </p>
            )}

            {category === 'box' && (
                <div
                    className="bg-primary rounded-lg text-base text-white px-4 py-2 cursor-pointer"
                    onClick={handleClick}
                >
                    {label}
                </div>
            )}
        </>
    );
}
