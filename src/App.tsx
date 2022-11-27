import React from 'react';
import RoutingProvider from "./providers/Router/RoutingProvider";
import {Box} from "grommet";
import ExamNavbar from "./components/ExamNavbar/ExamNavbar";
import {useLocation} from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      style={{
        minHeight: "undefined",
      }}
    >
      { pathname !== '/login' && pathname !== '/sign-up' && (
        <ExamNavbar/>
      )}
      <RoutingProvider/>
    </Box>
  );
}

export default App;
