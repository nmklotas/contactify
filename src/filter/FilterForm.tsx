import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button } from "../common/form/Button";
import { FilterValues } from "./values";
import { Select } from "../common/form/Select";
import { Input } from "../common/form/Input";
import { FormEvent, useState } from "react";
import { ActiveCheckbox } from "./ActiveCheckbox";
import { ClassProp } from "../common/types";

interface Props {
  cities: string[];
  onSubmit: (values: FilterValues) => void;
}

export function FilterForm({ cities, onSubmit, className }: ClassProp<Props>) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [showActive, setShowActive] = useState(true);
  const cityOptions = cities.map((c) => ({ name: c, value: c }));
  return (
    <form className={clsx(classes.root, className)} onSubmit={submit}>
      <Input
        name="name"
        label="Name"
        value={name}
        onChange={setName}
        className={classes.name}
      />
      <Select
        name="city"
        label="City"
        value={city}
        options={cityOptions}
        onChange={setCity}
        className={classes.city}
      />
      <ActiveCheckbox
        name="showActive"
        label="Show active"
        value={showActive}
        onChange={setShowActive}
        className={classes.showActive}
      />
      <Button label="filter" className={classes.submit} />
    </form>
  );

  function submit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      name,
      city,
      showActive,
    });
  }
}

const useStyles = makeStyles((t) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: t.palette.primary.main,
    padding: "1.4em 1.1em",
    borderRadius: "10px 10px 0px 0px",
  },
  name: {
    margin: "0 1em 0 0",
    width: "20%",
  },
  city: {
    margin: "0 1em 0 0",
    width: "20%",
  },
  showActive: {
    color: t.palette.text.primary.light,
    flex: "0 0 auto",
  },
  submit: {
    margin: "0.5em 0.5em 0.5em 2em",
  },
}));
