import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6">Yasiru Wickramasinghe</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
