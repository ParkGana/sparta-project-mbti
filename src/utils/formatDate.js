/* 현재 날짜 및 시간 계산 */
export const formatDate = () => {
    const date = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);

    return date.toISOString().replace('T', ' ').slice(0, -5).toString();
};
