import { makeStyles } from "@material-ui/styles";

interface Props {
  error: unknown;
}

export function Error({ error }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.message}>
        An error has occurred: {JSON.stringify(error)}
      </span>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)",
    background: "red",
  },
  message: {
    color: t.palette.text.primary.light,
  },
}));
