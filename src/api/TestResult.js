import axios from 'axios';

const BASE_URL = 'http://localhost:5000/testResults';

/* 테스트 결과 데이터 가져오기 */
export const getTestResults = async () => {
    try {
        const response = await axios.get(BASE_URL);

        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};

/* 테스트 결과 데이터 생성 */
export const createTestResult = async (data) => {
    try {
        await axios.post(BASE_URL, data);
    } catch (e) {
        return { error: e };
    }
};

/* 테스트 결과 데이터 삭제 */
export const deleteTestResult = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (e) {
        return { error: e };
    }
};

/* 테스트 결과 데이터 공개 여부 수정 */
export const updateTestResultVisibility = async (id, visibility) => {
    try {
        await axios.patch(`${BASE_URL}/${id}`, { isVisibility: visibility });
    } catch (e) {
        return { error: e };
    }
};
