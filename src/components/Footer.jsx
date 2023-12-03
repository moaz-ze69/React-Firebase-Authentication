import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className="mt-auto py-3 bg-body-tertiary"
    >
      {"Copyright © - Powered By "}
      <Link
        color="inherit"
        href="/"
        target="_blank"
        sx={{ textDecoration: "none", fontWeight: "700" }}
      >
        Firebase Authentication
      </Link>
      {" - "}
      <Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
        Firebase Authentication
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Footer;
