import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { getUser } from "../../stores/auth/authSlice";

const theme = createTheme();

export default function Home() {
  const navigate = useNavigate();
  const user = useSelector(getUser);

  useEffect(() => {
    document.title = "Home - React Firebase Authentication";
  }, [user]);

  const handleAuth = () => {
    navigate("/sign-in");
  };

  return (
    <div className="content-container d-flex align-items-center justify-content-center my-5 flex-column text-center">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {user.isAuthenticated ? (
            <Box>
              <Button variant="outlined">Logout</Button>
            </Box>
          ) : (
            <Box>
              <Typography style={{ margin: "10px" }} fontFamily={"cursive"}>
                Authenticate Yourself
              </Typography>
              <Button variant="outlined" onClick={handleAuth}>
                Here
              </Button>
            </Box>
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}
