import { useCreateTestResult } from './useCreateTestResult';
import { useDeleteTestResult } from './useDeleteTestResult';
import { useFetchTestResults } from './useFetchTestResults';
import { useUpdateTestResult } from './useUpdateTestResult';

export function useTestResults() {
    const { fetchQuery } = useFetchTestResults();
    const { createMutation } = useCreateTestResult();
    const { deleteMutation } = useDeleteTestResult();
    const { updateMutation } = useUpdateTestResult();

    return { fetchQuery, createMutation, deleteMutation, updateMutation };
}
