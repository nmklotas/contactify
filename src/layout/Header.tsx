import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../common/types";

export function Header({ className }: ClassProp) {
  const classes = useStyles();
  return (
    <header className={clsx(classes.root, className)}>
      <h1>Contactify</h1>
    </header>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h1": {
      textTransform: "uppercase",
      color: t.palette.text.primary.light,
    },
  },
}));
