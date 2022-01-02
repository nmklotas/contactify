import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { HomePage } from "./home/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faArrowUp,
  faCheck,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquare,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { createTheme } from "./common/theme";

library.add(
  faCheck,
  faSquare,
  faEye,
  faEyeSlash,
  faArrowUp,
  faArrowDown,
  faListUl
);

export function App() {
  const classes = useStyles();
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <main className={classes.root}>
        <div className={classes.page}>
          <HomePage />
        </div>
      </main>
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    background: "#377BBE",
  },
  page: {
    marginTop: "5%",
  },
});
