import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/testResults'
});

/* 테스트 결과 데이터 목록 가져오기 */
export const getTestResultsAPI = async () => {
    try {
        const response = await api.get('');

        return { data: response.data };
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 테스트 결과 데이터 생성 */
export const createTestResultAPI = async (data) => {
    try {
        await api.post('', data);
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 테스트 결과 데이터 삭제 */
export const deleteTestResultAPI = async (id) => {
    try {
        await api.delete(`/${id}`);
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 테스트 결과 데이터 수정 */
export const updateTestResultAPI = async (id, data) => {
    try {
        await api.patch(`/${id}`, data);
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};
