import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../types";

interface Props {
  name: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
}

export function Input({
  name,
  value,
  label,
  onChange,
  className,
}: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={label}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(classes.root, className)}
    />
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    padding: "0.4em",
    border: 0,
    fontFamily: "inherit",
    fontSize: "inherit",
    color: t.palette.text.primary.light,
    borderBottom: `1px solid ${t.palette.text.primary.light}`,
    background: "inherit",
    "&::placeholder": {
      color: t.palette.text.primary.light,
      opacity: "1",
    },
  },
}));
