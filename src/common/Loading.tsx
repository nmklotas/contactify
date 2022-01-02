import { makeStyles } from "@material-ui/styles";

export function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>Loading...</span>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)",
    "& span": {
      color: t.palette.text.primary.light,
    },
  },
}));
