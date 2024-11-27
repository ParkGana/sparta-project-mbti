import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTestResultAPI } from '../api/TestResult';

export function useUpdateTestResult() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateTestResultAPI,
        onSuccess: () => queryClient.invalidateQueries(['testResults'])
    });

    return { updateMutation: mutation };
}
