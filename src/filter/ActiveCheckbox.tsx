import clsx from "clsx";
import { Checkbox } from "../common/form/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/styles";
import { ClassProp } from "../common/types";

interface Props {
  value: boolean;
  name: string;
  label: string;
  onChange: (value: boolean) => void;
}

export function ActiveCheckbox({
  name,
  label,
  value,
  className,
  onChange,
}: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Checkbox name={name} label={label} value={value} onChange={onChange} />
      <FontAwesomeIcon
        icon={["far", "eye"]}
        transform="shrink-2 left-1 down-1"
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "inline",
  },
});
