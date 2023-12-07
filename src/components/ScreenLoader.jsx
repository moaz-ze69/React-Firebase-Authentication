import React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Loader from "./Loader";

const theme = createTheme();

export default function ScreenLoader() {
  return (
    <div className="content-container d-flex align-items-center justify-content-center my-5 flex-column text-center ">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box>
            <Loader />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
