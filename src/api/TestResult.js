import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/testResults'
});

/* 테스트 결과 데이터 목록 가져오기 */
export const getTestResultsAPI = async () => {
    const response = await api.get('');

    return response.data;
};

/* 테스트 결과 데이터 생성 */
export const createTestResultAPI = async (data) => {
    await api.post('', data);
};

/* 테스트 결과 데이터 삭제 */
export const deleteTestResultAPI = async (id) => {
    await api.delete(`/${id}`);
};

/* 테스트 결과 데이터 수정 */
export const updateTestResultAPI = async ({ id, data }) => {
    await api.patch(`/${id}`, data);
};
