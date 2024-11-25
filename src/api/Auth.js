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

/* 사용자 정보 가져오기 */
export const fetchUser = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};

/* 사용자 정보 수정 */
export const updateUser = async (token, data) => {
    try {
        const response = await axios.patch(`${BASE_URL}/profile`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });

        return { data: response.data };
    } catch (e) {
        return { error: e };
    }
};
