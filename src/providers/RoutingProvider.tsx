import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const RoutingProvider = (): JSX.Element => {
  const { pathname } = useLocation();

  // When navigating between pages, we expect the scrollbar to go to the top, instead of staying where it was on the old page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default React.memo(RoutingProvider);