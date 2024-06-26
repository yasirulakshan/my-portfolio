import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <h1>Yasiru Wickramasinghe</h1>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
