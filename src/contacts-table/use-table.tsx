import { Contact } from "../api";
import { useSortBy, useTable as useReactTable } from "react-table";
import { useMemo } from "react";
import {
  createIsActiveColumn,
  createSelectionColumn,
  createTextColumn,
} from "./columns";

export function useTable(contacts: Contact[]) {
  const columns = useMemo(
    () => [
      createTextColumn("Name", "name"),
      createTextColumn("City", "city"),
      createIsActiveColumn(),
      createTextColumn("Email", "email"),
      createTextColumn("Phone", "phone"),
      createSelectionColumn(),
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } =
    useReactTable<Contact>(
      {
        columns,
        data: contacts,
        initialState: {
          sortBy: [
            {
              id: "name",
              desc: false,
            },
          ],
          hiddenColumns: [],
        },
      },
      useSortBy
    );

  return {
    getTableProps,
    getTableBodyProps,
    headers: {
      name: headers[0],
      rest: headers.slice(1, -1),
      selection: headers[headers.length - 1],
    },
    rows,
    prepareRow,
  };
}
