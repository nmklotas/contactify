import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../types";

interface Props {
  label: string;
}

export function Button({ label, className }: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <button type="submit" className={clsx(className, classes.root)}>
      {label}
    </button>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    background: t.palette.primary.light,
    border: "none",
    color: t.palette.text.primary.light,
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "20px",
    padding: "0.6em 2em",
    textTransform: "uppercase",
    cursor: "pointer",
    "&:hover": {
      background: t.palette.text.primary.active,
    },
  },
}));
