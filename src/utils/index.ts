const convertMoney = (money: number): string => {
  const formattedMoney = money.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formattedMoney;
};

const convertMoneyP2 = (money: number): string => {
  const formattedMoney = money.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formattedMoney;
};

export { convertMoney, convertMoneyP2 };
