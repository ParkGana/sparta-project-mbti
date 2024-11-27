import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTestResultAPI } from '../api/TestResult';

export function useCreateTestResult() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createTestResultAPI,
        onSuccess: () => queryClient.invalidateQueries(['testResults'])
    });

    return { createMutation: mutation };
}
