import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../types";

interface Props {
  name: string;
  value: string;
  label: string;
  options: {
    name: string;
    value: string;
  }[];
  onChange: (value: string) => void;
}

export function Select({
  name,
  value,
  options,
  label,
  onChange,
  className,
}: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <select
      name={name}
      value={value}
      placeholder={label}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(classes.root, className)}
    >
      <option value="" disabled hidden>
        {label}
      </option>
      {options.map((o, i) => (
        <option key={i} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    padding: "0.4em 0.4em 0.4em 0.4em",
    border: 0,
    fontFamily: "inherit",
    fontSize: "inherit",
    borderBottom: `1px solid ${t.palette.text.primary.light}`,
    backgroundColor: "inherit",
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "right .7em top 50%, 0 0",
    backgroundSize: ".65em auto, 100%",
    backgroundImage:
      "url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E)",
    appearance: "none",
    color: t.palette.text.primary.light,
    "& option": {
      background: t.palette.primary.contrast,
      color: t.palette.text.primary.dark,
    },
  },
}));
