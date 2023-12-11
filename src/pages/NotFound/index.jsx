import React, { useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import backgroundImageUrl from "../../assets/404.png";

const theme = createTheme();

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - React Firebase Authentication";
  }, []);

  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="content-container d-flex align-items-center justify-content-center my-5 flex-column text-center"
      style={divStyle}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box></Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
