import { Contact } from "../api";
import { Column } from "react-table";
import { Menu } from "./menu/Menu";
import { MenuItem } from "./menu/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function createSelectionColumn(): Column<Contact> {
  return {
    Header: (p) => (
      <Menu>
        <MenuItem
          label="Name"
          value={!p.state.hiddenColumns!.includes("name")}
          onChange={(_) => p.toggleHideColumn("name")}
        />
        <MenuItem
          label="City"
          value={!p.state.hiddenColumns!.includes("city")}
          onChange={(_) => p.toggleHideColumn("city")}
        />
        <MenuItem
          label="Email"
          value={!p.state.hiddenColumns!.includes("email")}
          onChange={(_) => p.toggleHideColumn("email")}
        />
        <MenuItem
          label="Phone"
          value={!p.state.hiddenColumns!.includes("phone")}
          onChange={(_) => p.toggleHideColumn("phone")}
        />
      </Menu>
    ),
    id: "column-selection",
  };
}

export function createIsActiveColumn(): Column<Contact> {
  return {
    Header: "",
    accessor: "isActive",
    Cell: (p) =>
      p.value ? (
        <FontAwesomeIcon
          icon={["far", "eye"]}
          transform="shrink-2 left-1 down-1"
        />
      ) : (
        <FontAwesomeIcon
          icon={["far", "eye-slash"]}
          transform="shrink-2 left-1 down-1"
        />
      ),
  };
}

export function createTextColumn(
  header: string,
  accessor: keyof Contact
): Column<Contact> {
  return {
    Header: header,
    accessor,
  };
}
