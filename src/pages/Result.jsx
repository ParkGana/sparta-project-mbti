import { useEffect, useState } from 'react';
import { deleteTestResult, getTestResults, updateTestResultVisibility } from '../api/TestResult';
import { mbtiDescriptions } from '../data/descriptions';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

export default function Result() {
    const [results, setResults] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetchResults();
    }, [user]);

    const fetchResults = async () => {
        const { data, error } = await getTestResults();

        // 오류 발생
        if (error) {
            window.alert(`${error.status} 오류가 발생했습니다.`);
        }
        // 성공
        else if (data) {
            const filterData = data.filter((item) => item.user.id === user?.id || item.isVisibility);
            setResults(filterData);
        }
        // 실패
        else {
            window.alert('테스트 결과를 불러오지 못했습니다.');
        }
    };

    /* 결과 데이터 공개 여부 변경 */
    const handleUpdateVisibility = async (id, visibility) => {
        await updateTestResultVisibility(id, visibility);
        fetchResults();
    };

    /* 결과 데이터 삭제 */
    const handleDelete = async (id) => {
        await deleteTestResult(id);
        fetchResults();
    };

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
                                        handleClick={() => handleUpdateVisibility(result.id, !result.isVisibility)}
                                    />
                                    <Button category="box" label="삭제" handleClick={() => handleDelete(result.id)} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
