import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUser } from "../stores/auth/authSlice";
import UserLoginProfileAvater from "./UserLoginProfileAvatar";
import UserLogoutProfileAvater from "./UserLogoutProfileAvatar";

function Header() {
  const location = useLocation();
  const user = useSelector(getUser);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ width: "100vw" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/logo.png"
            alt="Logo"
            width="100%"
            height="24"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div
              className="d-lg-flex align-items-center"
              style={{ width: "85vw" }}
            >
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              {!user.isAuthenticated && (
                <>
                  <Link
                    to="/sign-in"
                    className={`nav-link ${
                      location.pathname === "/sign-in" ? "active" : ""
                    }`}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/sign-up"
                    className={`nav-link ${
                      location.pathname === "/sign-up" ? "active" : ""
                    }`}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            <div className="d-flex justify-content-end">
              {user.isAuthenticated ? (
                <UserLoginProfileAvater name={user.user.displayName} />
              ) : (
                <UserLogoutProfileAvater />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
