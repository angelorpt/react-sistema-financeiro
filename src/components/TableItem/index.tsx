import { TableColumn, TableLine } from "./styles";
import { Item } from "../../@types/Item";
import { formatDate } from "./../../helpers/dateFilter";
import { categories } from "./../../data/categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>{categories[item.category].title}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>R$ {item.value}</TableColumn>
    </TableLine>
  );
};
