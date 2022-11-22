import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import {Exams} from "../pages/Exams/Exams";
import Activities from "../pages/Activities/Activities";
import Questions from "../pages/Questions/Questions";
import CreateForm from "../pages/CreateForm/CreateForm";

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
      <Route path='/:classId/exams' element={<Exams />}/>
      <Route path='/:classId/activities' element={<Activities />}/>
      <Route path='/:classId/questions' element={<Questions />}/>
      <Route path='/:classId/new-question' element={<CreateForm  type={'question'}/>}/>
    </Routes>
  );
};

export default React.memo(RoutingProvider);