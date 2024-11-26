import TestForm from '../components/TestForm';
import { questions } from '../data/questions';
import { useForm } from '../hooks/useForm';

export default function Test() {
    const { values, handleSelect } = useForm(Array(questions.length).fill({ type: '', answer: '', value: '' }));

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">MBTI 테스트</p>
                <TestForm label="결과 확인하기" data={values} handleSelect={handleSelect} handleSubmit={() => {}} />
            </div>
        </div>
    );
}
