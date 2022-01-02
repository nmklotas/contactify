import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../common/types";

interface Props {
  label: string;
  value: string;
}

export function TextRow({ label, value, className }: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.label}>{label}</div>
      <div className={classes.value}>{value}</div>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    display: "flex",
  },
  label: {
    flex: "1 1 3.1em",
    color: t.palette.text.primary.main,
    textAlign: "right",
    paddingRight: "1.3em",
  },
  value: {
    flex: "1 1 3.1em",
    color: t.palette.text.primary.dark,
    textAlign: "left",
  },
}));
