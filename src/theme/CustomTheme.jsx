import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

const CustomThemeProvider = (props) => {
  const themeOptions = useSelector((state) => state.theme);
  const theme = createTheme({
    palette: themeOptions.palette,
  });
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
};

export default CustomThemeProvider;
