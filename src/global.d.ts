import { DefaultTheme } from "@material-ui/styles/defaultTheme";
import { ColumnInstance, TableState, IdType } from "react-table";

declare module "@material-ui/styles/defaultTheme" {
  export interface DefaultTheme {
    palette: {
      text: {
        primary: {
          main: string;
          light: string;
          dark: string;
          active: string;
        };
        link: {
          main: string;
        };
      };
      primary: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
    };
  }
}

declare module "react-table" {
  export interface ColumnInstance<D extends object = {}> {
    isSortedDesc: boolean;
    isSorted: boolean;
    getSortByToggleProps: () => HeaderPropGetter<D>;
  }

  export interface TableState<D extends object = {}> {
    hiddenColumns?: Array<IdType<D>> | undefined;
    sortBy?: Array<{
      id: IdType<D>;
      desc: boolean;
    }>;
  }
}
