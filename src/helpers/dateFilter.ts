import { Item } from "../@types/Item";

export const getCurrentMoth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const sDay = day < 10 ? `0${day}` : day;
  const sMonth = month < 10 ? `0${month}` : month;
  return `${sDay}/${sMonth}/${year}`;
};
