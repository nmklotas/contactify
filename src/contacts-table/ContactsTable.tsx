import { makeStyles } from "@material-ui/styles";
import { Contact } from "../api";
import { ClassProp } from "../common/types";
import { useTable } from "./use-table";
import { SortIcon } from "./SortIcon";
import { Visible } from "../common/Visible";

interface Props {
  contacts: Contact[];
  onContactSelected: (contact: Contact) => void;
}

export function ContactsTable({
  contacts,
  onContactSelected,
  className,
}: ClassProp<Props>) {
  const classes = useStyles();
  const { rows, getTableProps, getTableBodyProps, headers, prepareRow } =
    useTable(contacts);
  return (
    <div className={className}>
      <table className={classes.table} {...getTableProps()}>
        <thead>
          <tr>
            <Visible condition={headers.name.isVisible} key={-1}>
              <th
                {...headers.name.getHeaderProps(
                  headers.name.getSortByToggleProps()
                )}
                className={classes.header}
              >
                {headers.name.render("Header")}
                {headers.name.isSorted && (
                  <SortIcon down={headers.name.isSortedDesc} />
                )}
              </th>
            </Visible>
            {headers.rest.map((h, i) => (
              <Visible condition={h.isVisible} key={i}>
                <th {...h.getHeaderProps()} className={classes.header}>
                  {h.render("Header")}
                </th>
              </Visible>
            ))}
            <th
              {...headers.selection.getHeaderProps()}
              className={classes.header}
              key={-2}
            >
              {headers.selection.render("Header")}
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => onContactSelected(row.original)}
                className={classes.row}
                key={row.original.id}
              >
                {row.cells.map((c, i) => (
                  <td {...c.getCellProps()} className={classes.cell} key={i}>
                    {c.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  table: {
    borderCollapse: "collapse",
    background: t.palette.primary.contrast,
    width: "100%",
  },
  cell: {
    padding: "0.62em",
    color: t.palette.text.primary.main,
  },
  row: {
    borderBottom: `1px solid ${t.palette.primary.dark}`,
    "&:hover": {
      background: t.palette.primary.dark,
      cursor: "pointer",
    },
  },
  sortIcon: {
    margin: "0 0 0 0.2em",
  },
  header: {
    padding: "0 0.7em",
    textAlign: "left",
    background: t.palette.primary.light,
    color: t.palette.text.primary.light,
    fontWeight: "inherit",
  },
}));
