import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Checkbox } from "../../common/form/Checkbox";
import { ClassProp } from "../../common/types";

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function MenuItem({
  value,
  onChange,
  label,
  className,
}: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <label className={clsx(classes.root, className)}>
      <div className={classes.content}>
        <Checkbox
          label={label}
          value={value}
          onChange={onChange}
          className={classes.checkbox}
        />
      </div>
    </label>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    cursor: "pointer",
  },
  content: {
    padding: "0.5em",
  },
  checkbox: {
    color: t.palette.text.primary.dark,
  },
}));
