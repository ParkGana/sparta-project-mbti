import { useState } from 'react';
import { questions } from '../data/questions';

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    /* 입력 값 변경 */
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    /* 선택 값 변경 */
    const handleSelect = (id, answer, value) => {
        const newAnswers = [...values];
        newAnswers[id - 1] = { type: questions[id - 1].type, answer, value };
        setValues(newAnswers);
    };

    return {
        values,
        handleChange,
        handleSelect
    };
}
