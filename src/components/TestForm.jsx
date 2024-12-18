import { questions } from '../data/questions';
import Button from './Button';

export default function TestForm({ label, data, handleSelect, handleSubmit }) {
    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            {questions.map((question, questionIndex) => (
                <div className="flex flex-col gap-2" key={question.id}>
                    <p className="text-xl text-black font-bold">{question.question}</p>
                    {question.options.map((option, optionIndex) => (
                        <label key={`${question.id}-${optionIndex + 1}`} htmlFor={option}>
                            <div
                                className={`flex items-center gap-1 border-2 rounded-lg p-2 cursor-pointer
                                    ${data[questionIndex].value === option ? 'border-primary' : 'border-gray-200'}
                                `}
                            >
                                <input
                                    className="hidden"
                                    type="radio"
                                    name={question.id}
                                    id={option}
                                    checked={data[questionIndex].value === option}
                                    value={option}
                                    onChange={() =>
                                        handleSelect(question.id, question.type.split('/')[optionIndex], option)
                                    }
                                />
                                {option}
                            </div>
                        </label>
                    ))}
                </div>
            ))}
            <Button category="form" label={label} />
        </form>
    );
}
