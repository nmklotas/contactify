import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/styles";
import { ReactNode } from "react";
import { ClassProp } from "../../common/types";

interface Props {
  children: ReactNode[];
}

export function Menu({ children, className }: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <button type="button" className={classes.button}>
        <FontAwesomeIcon icon={["fas", "list-ul"]} className={classes.icon} />
      </button>
      <div className={classes.dropdown}>
        <ul>
          {children.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    position: "relative",
    display: "inline-block",
    "&:hover $dropdown": {
      display: "block",
    },
    "&:hover $icon": {
      color: t.palette.text.primary.main,
    },
    "&:hover": {
      background: t.palette.primary.contrast,
      boxShadow: "0 16px 32px 2px rgba(0, 0, 0, 0.14)",
    },
    padding: "0.7em 0.2em",
    cursor: "pointer",
  },
  icon: {
    color: t.palette.primary.contrast,
  },
  dropdown: {
    display: "none",
    position: "absolute",
    minWidth: "10em",
    top: "100%",
    left: "-127.5px",
    zIndex: 2,
    boxShadow: "0 16px 32px 2px rgba(0, 0, 0, 0.14)",
    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
      background: t.palette.primary.contrast,
      "& li": {
        padding: 0,
        borderBottom: "1px solid rgba(0, 0, 0, 0.14)",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          cursor: "pointer",
        },
      },
    },
  },
  button: {
    border: 0,
    background: "transparent",
    cursor: "pointer",
  },
}));
