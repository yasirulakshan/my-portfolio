import React from "react";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

function Home(): React.JSX.Element {
  return (
    <div className="bg-dark">
      <NavBar />
    </div>
  );
}

export default Home;
