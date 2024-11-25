import { useState } from 'react';

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    /* 입력 값 변경 */
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return {
        values,
        handleChange
    };
}
