import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Contact as ApiContact } from "../api";
import userPic from "./userpic.jpg";
import { TextRow } from "./TextRow";
import { ClassProp } from "../common/types";

interface Props {
  contact: ApiContact;
}

export function Card({ contact, className }: ClassProp<Props>) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.bar} />
      <img src={userPic} alt="user" className={classes.image} />
      <div className={classes.rows}>
        <TextRow label="Name:" value={contact.name} />
        <TextRow label="City:" value={contact.city} />
        <TextRow label="Email:" value={contact.email} />
        <TextRow label="Phone:" value={contact.phone} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((t) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: t.palette.primary.dark,
  },
  image: {
    display: "block",
    marginTop: "2em",
    borderRadius: "200px",
    border: "8px solid white",
    alignSelf: "center",
    maxWidth: "80%",
    maxHeight: "15em",
  },
  rows: {
    padding: "1em",
  },
  bar: {
    background: t.palette.primary.light,
    height: "2.586em",
  },
}));
