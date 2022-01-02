import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClassProp } from "../types";

interface Props {
  name?: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function Checkbox({
  name,
  label,
  value,
  onChange,
  className,
}: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <label className={clsx(classes.root, className)}>
      <span className={clsx("fa-layers", "fa-fw")}>
        <input
          name={name}
          checked={value}
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
        />
        <FontAwesomeIcon
          icon={["far", "square"]}
          transform="grow-2"
          className={clsx(classes.checkIcon, classes.unchecked)}
        />
        <FontAwesomeIcon
          icon={["fas", "check"]}
          transform="shrink-6"
          className={clsx(classes.checkIcon, classes.checked)}
        />
      </span>
      <label
        className={classes.label}
        htmlFor={name}
        onClick={() => onChange(!value)}
      >
        {label}
      </label>
    </label>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    display: "flex-inline",
    alignItems: "center",
    userSelect: "none",
    "& input": {
      display: "none",
    },
    "& input:not(:checked) ~ $checked": {
      display: "none",
    },
    cursor: "pointer",
  },
  checked: {
    color: t.palette.primary.contrast,
    background: t.palette.primary.light,
  },
  unchecked: {
    color: t.palette.primary.light,
    background: t.palette.primary.light,
  },
  checkIcon: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  label: {
    padding: "0.15em 0.55em 0.25em 0.25em",
    cursor: "pointer",
  },
}));
