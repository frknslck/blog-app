import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
            <AppRouter />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
