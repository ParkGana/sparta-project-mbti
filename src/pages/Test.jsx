import { useState } from 'react';
import TestForm from '../components/TestForm';
import { questions } from '../data/questions';
import { useForm } from '../hooks/useForm';
import { calculateMBTI } from '../utils/calculateMBTI';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { mbtiDescriptions } from '../data/descriptions';
import { formatDate } from '../utils/formatDate';
import { useAuth } from '../contexts/AuthContext';
import { useTestResults } from '../hooks/useTestResults';

export default function Test() {
    const navigate = useNavigate();

    const { user } = useAuth();
    const { createMutation } = useTestResults();
    const { values, handleSelect, handleReset } = useForm(
        Array(questions.length).fill({ type: '', answer: '', value: '' })
    );

    const [result, setResult] = useState('');

    /* 테스트 결과 확인 */
    const handleSubmitTest = async (e) => {
        e.preventDefault();

        setResult(calculateMBTI(values));

        createMutation.mutate({
            created_at: formatDate(),
            userId: user?.id,
            result: calculateMBTI(values),
            isVisibility: true
        });
    };

    /* 테스트 초기화 */
    const handleResetTest = () => {
        setResult('');
        handleReset();
    };

    return (
        <div className="flex justify-center p-10">
            {result ? (
                <div className="max-w-screen-sm flex flex-col items-center gap-6 bg-white rounded-lg shadow-lg p-8">
                    <p className="text-2xl text-black font-bold">당신의 MBTI는 {result}입니다.</p>
                    <p className="text-base text-black">{mbtiDescriptions[result]}</p>
                    <Button category="box" label="결과 페이지로 이동하기" handleClick={() => navigate('/result')} />
                    <Button category="text" label="다시 검사하기" handleClick={handleResetTest} />
                </div>
            ) : (
                <div className="flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg p-8">
                    <p className="text-4xl text-black font-bold">MBTI 테스트</p>
                    <TestForm
                        label="결과 확인하기"
                        data={values}
                        handleSelect={handleSelect}
                        handleSubmit={handleSubmitTest}
                    />
                </div>
            )}
        </div>
    );
}
