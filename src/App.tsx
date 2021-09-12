import React, { useState, useEffect } from "react";
import { Header, Sidebar } from "components";
import { MainPage } from "pages";
import GlobalStyles from "common/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "common/themes/default";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [sidebarFold, setSidebarFold] = useState(true);

  const isMobile = innerWidth < 768;

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isMobile={isMobile} setSidebarFold={setSidebarFold} />
      <Sidebar fold={sidebarFold} setFold={setSidebarFold} />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
