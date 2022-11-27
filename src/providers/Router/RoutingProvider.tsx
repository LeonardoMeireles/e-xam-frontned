import React, {useContext, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import LoginSignup from "../../pages/LoginSignup/LoginSignup";
import Home from "../../pages/Home/Home";
import List from "../../pages/List/List";
import CreateForm from "../../pages/CreateForm/CreateForm";
import QuestionPage from "../../pages/Question/QuestionPage";
import Exam from "../../pages/Exam/Exam";
import AuthContext from "../AuthContext";
import ProfessorRoute from "./ProfessorRoute";

const RoutingProvider = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // When navigating between pages, we expect the scrollbar to go to the top, instead of staying where it was on the old page
  useEffect(() => {
    if(pathname !== '/sign-up' && !user) navigate('/login')
    window.scrollTo(0, 0);
  }, [pathname, user, navigate]);

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<LoginSignup type={'LOGIN'} />} />
      <Route path='/sign-up' element={<LoginSignup type={'SIGNUP'} />} />
      <Route element={<ProfessorRoute/>}>
        <Route path='/:classId/new-question' element={<CreateForm  type={'question'}/>}/>
        <Route path='/:classId/new-exam' element={<CreateForm  type={'exam'}/>}/>
      </Route>
      <Route path='/:classId/:listType' element={<List />}/>
      <Route path='/:classId/question/:questionId' element={<QuestionPage/>}/>
      <Route path='/:classId/exam/:examId' element={<Exam/>}/>
    </Routes>
  );
};

export default React.memo(RoutingProvider);