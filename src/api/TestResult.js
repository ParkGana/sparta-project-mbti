import axios from 'axios';

const BASE_URL = 'http://localhost:5000/testResults';

/* 테스트 결과 데이터 생성 */
export const createTestResult = async (data) => {
    try {
        await axios.post(BASE_URL, data);
    } catch (e) {
        return { error: e };
    }
};
