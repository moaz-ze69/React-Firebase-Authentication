import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import { signOut } from "firebase/auth";

import { auth } from "../../firebase";

import { getUser, clearUser } from "../../stores/auth/authSlice";

const theme = createTheme();

export default function Home() {
  const navigate = useNavigate();
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Home - React Firebase Authentication";
  }, []);

  const handleAuth = () => {
    navigate("/sign-in");
  };

  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="content-container d-flex align-items-center justify-content-center my-5 flex-column text-center">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {user.isAuthenticated ? (
            <Box>
              <Typography style={{ margin: "10px" }} fontFamily={"cursive"}>
                Welcome {user.user.displayName}
              </Typography>
              {isLoading ? (
                <LoadingButton loading variant="contained">
                  Logout
                </LoadingButton>
              ) : (
                <Button variant="outlined" onClick={handleLogout}>
                  Logout
                </Button>
              )}
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
