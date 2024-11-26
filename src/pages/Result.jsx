import { useEffect, useState } from 'react';
import { getTestResults } from '../api/TestResult';
import { mbtiDescriptions } from '../data/descriptions';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

export default function Result() {
    const [results, setResults] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const fetchResults = async () => {
            const { data, error } = await getTestResults();

            // 오류 발생
            if (error) {
                window.alert(`${error.status} 오류가 발생했습니다.`);
            }
            // 성공
            else if (data) {
                setResults(data);
            }
            // 실패
            else {
                window.alert('테스트 결과를 불러오지 못했습니다.');
            }
        };

        fetchResults();
    }, []);

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">테스트 결과 모아보기</p>
                {results.map((result) => (
                    <div key={result.id} className="max-w-screen-sm border-4 border-primary rounded-lg">
                        <div className="flex justify-between border-b border-primary p-4">
                            <p className="text-base text-black font-bold">{result.user.nickname}</p>
                            <p className="text-base text-gray-500">{result.created_at}</p>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <p className="text-xl text-primary font-bold">{result.result}</p>
                            <p className="text-base text-black">{mbtiDescriptions[result.result]}</p>
                            {user?.id === result.user.id && (
                                <div className="flex justify-center gap-4">
                                    <Button
                                        category="box"
                                        label={`${result.isVisibility ? '비' : ''}공개로 전환`}
                                        handleClick={() => {}}
                                    />
                                    <Button category="box" label="삭제" handleClick={() => {}} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
