import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTestResultAPI } from '../api/TestResult';

export function useDeleteTestResult() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteTestResultAPI,
        onSuccess: () => queryClient.invalidateQueries(['testResults'])
    });

    return { deleteMutation: mutation };
}
