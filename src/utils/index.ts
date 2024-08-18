

const convertMoney = (money: number): string => {
    const formattedMoney = money.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return formattedMoney;
}

export {
    convertMoney
}