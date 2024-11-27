import axios from 'axios';

const api = axios.create({
    baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

/* 회원가입 */
export const signupAPI = async (data) => {
    try {
        const response = await api.post('/register', data);

        return { data: response.data };
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 로그인 */
export const signinAPI = async (data) => {
    try {
        const response = await api.post('/login', data);

        return { data: response.data };
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 사용자 정보 가져오기 */
export const fetchUserAPI = async (token) => {
    try {
        const response = await api.get('/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return { data: response.data };
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};

/* 사용자 정보 수정 */
export const updateUserAPI = async (token, data) => {
    try {
        const response = await api.patch('/profile', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });

        return { data: response.data };
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};
