import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../firebase";

import { setUser } from "../../stores/auth/authSlice";

const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Sign Up - React Firebase Authentication";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        dispatch(setUser(userCredentials.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // if (user.isAuthenticated) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <div className="content-container d-flex align-items-center justify-content-center my-5 flex-column text-center">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className="row g-3 login-form mt-1" onSubmit={handleSubmit}>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  required
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-outline-primary">
                  Sign Up
                </button>
              </div>

              <div className="d-grid gap-2">
                <Link to="/sign-in">Already have an account? Sign in here</Link>
              </div>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
