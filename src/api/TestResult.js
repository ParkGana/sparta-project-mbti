import axios from 'axios';

const BASE_URL = 'http://localhost:5000/testResults';

/* 테스트 결과 데이터 목록 가져오기 */
export const getTestResultsAPI = async () => {
    try {
        const response = await axios.get(BASE_URL);

        return { data: response.data };
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 테스트 결과 데이터 생성 */
export const createTestResultAPI = async (data) => {
    try {
        await axios.post(BASE_URL, data);
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 테스트 결과 데이터 삭제 */
export const deleteTestResultAPI = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 테스트 결과 데이터 수정 */
export const updateTestResultAPI = async (id, data) => {
    try {
        await axios.patch(`${BASE_URL}/${id}`, data);
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};
