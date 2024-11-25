import axios from 'axios';

const BASE_URL = 'https://moneyfulpublicpolicy.co.kr';

/* 회원가입 */
export const runSignUp = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, data);

        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};

/* 로그인 */
export const runSignIn = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, data);

        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};
