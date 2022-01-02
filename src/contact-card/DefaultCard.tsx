import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../common/types";

export function DefaultCard({ className }: ClassProp) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <span>No contact selected</span>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    background: t.palette.primary.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
