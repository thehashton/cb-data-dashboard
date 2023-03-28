import { SessionProvider } from "next-auth/react";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
