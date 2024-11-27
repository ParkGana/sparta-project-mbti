import { deleteTestResultAPI, getTestResultsAPI, updateTestResultAPI } from '../api/TestResult';
import { mbtiDescriptions } from '../data/descriptions';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function Result() {
    const queryClient = useQueryClient();

    const { user } = useAuth();

    const {
        data: results,
        isPending,
        isError
    } = useQuery({
        queryKey: ['testResults'],
        queryFn: getTestResultsAPI,
        onError: (error) => window.alert(error.response.data || error.message)
    });

    const { mutate: updateMutate } = useMutation({
        mutationFn: updateTestResultAPI,
        onSuccess: () => queryClient.invalidateQueries(['testResults']),
        onError: (error) => window.alert(error.response.data || error.message)
    });

    const { mutate: deleteMutate } = useMutation({
        mutationFn: deleteTestResultAPI,
        onSuccess: () => queryClient.invalidateQueries(['testResults']),
        onError: (error) => window.alert(error.response.data || error.message)
    });

    /* 결과 데이터 수정 */
    const handleUpdateResult = async (id, isVisibility) => {
        updateMutate({ id, data: { isVisibility } });
    };

    /* 결과 데이터 삭제 */
    const handleDeleteResult = async (id) => {
        deleteMutate(id);
    };

    if (isPending) return <div>로딩 중...</div>;

    if (isError) return <div>데이터 조회 중 오류 발생</div>;

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
