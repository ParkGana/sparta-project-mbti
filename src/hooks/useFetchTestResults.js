import { useQuery } from '@tanstack/react-query';
import { getTestResultsAPI } from '../api/TestResult';

export function useFetchTestResults() {
    const query = useQuery({
        queryKey: ['testResults'],
        queryFn: getTestResultsAPI
    });

    return { fetchQuery: query };
}
