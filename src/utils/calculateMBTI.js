/* MBTI 계산 */
export const calculateMBTI = (answers) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    let result = '';

    // 점수 누적
    answers.forEach(({ answer }) => {
        scores[answer]++;
    });

    // 최종 MBTI 계산
    result += scores.E >= scores.I ? 'E' : 'I';
    result += scores.S >= scores.N ? 'S' : 'N';
    result += scores.T >= scores.F ? 'T' : 'F';
    result += scores.J >= scores.P ? 'J' : 'P';

    return result;
};
