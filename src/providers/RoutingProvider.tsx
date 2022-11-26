import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import List from "../pages/List/List";
import CreateForm from "../pages/CreateForm/CreateForm";
import QuestionPage from "../pages/Question/QuestionPage";
import Activity from "../pages/Activity/Activity";

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
      <Route path='/:classId/:listType' element={<List />}/>
      <Route path='/:classId/new-question' element={<CreateForm  type={'question'}/>}/>
      <Route path='/:classId/new-activity' element={<CreateForm  type={'activity'}/>}/>
      <Route path='/:classId/question/:questionId' element={<QuestionPage/>}/>
      <Route path='/:classId/activity/:activityId' element={<Activity type={'activity'}/>}/>
      <Route path='/:classId/exam/:activityId' element={<Activity type={'exam'}/>}/>
    </Routes>
  );
};

export default React.memo(RoutingProvider);