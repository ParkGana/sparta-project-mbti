import { useEffect, useState } from 'react';
import { deleteTestResultAPI, getTestResultsAPI, updateTestResultAPI } from '../api/TestResult';
import { mbtiDescriptions } from '../data/descriptions';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';

export default function Result() {
    const { user } = useAuth();

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchResults();
    }, [user]);

    /* 결과 데이터 목록 가져오기 */
    const fetchResults = async () => {
        const { data, } = await getTestResultsAPI();

        setResults(data.filter((item) => item.userId === user?.id || item.isVisibility));
    };

    /* 결과 데이터 수정 */
    const handleUpdateResult = async (id, isVisibility) => {
        await updateTestResultAPI(id, { isVisibility });
        fetchResults();
    };

    /* 결과 데이터 삭제 */
    const handleDeleteResult = async (id) => {
        await deleteTestResultAPI(id);
        fetchResults();
    };

    return (
        <div className="flex justify-center p-10">
            <div className="flex flex-col items-center gap-10 bg-white rounded-lg shadow-lg p-8">
                <p className="text-4xl text-black font-bold">테스트 결과 모아보기</p>
                {results.map((result) => (
                    <div key={result.id} className="max-w-screen-sm border-4 border-primary rounded-lg">
                        <div className="flex justify-between border-b border-primary p-4">
                            <p className="text-base text-black font-bold">{result.userId}</p>
                            <p className="text-base text-gray-500">{result.created_at}</p>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <p className="text-xl text-primary font-bold">{result.result}</p>
                            <p className="text-base text-black">{mbtiDescriptions[result.result]}</p>
                            {user?.id === result.userId && (
                                <div className="flex justify-center gap-4">
                                    <Button
                                        category="box"
                                        label={`${result.isVisibility ? '비' : ''}공개로 전환`}
                                        handleClick={() => handleUpdateResult(result.id, !result.isVisibility)}
                                    />
                                    <Button
                                        category="box"
                                        label="삭제"
                                        handleClick={() => handleDeleteResult(result.id)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
