import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

interface CategoryProps {
  color: string;
}

export const Category = styled.div<CategoryProps>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

interface ValueProps {
  color: "red" | "green";
}

export const Value = styled.div<ValueProps>`
  color: ${(props) => props.color};
`;
