import {Box, Spinner, Text} from "grommet";
import {useCallback, useContext, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import AuthContext from "../../providers/AuthContext";

export function Exam(): JSX.Element {

  const {examId} = useParams();
  const {user} = useContext(AuthContext);
  const [exam, setExam] = useState<any>();
  const [questions, setQuestions] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`http://18.231.91.30/api/exam/${examId}`, {
      headers: {
        Authorization: `Bearer ${user.auth}`,
      },
    }).then((res: any) => {
      const examRes = res.data;
      axios.get(`http://18.231.91.30/api/exam/by_exam_id`, {
        headers: {
          Authorization: `Bearer ${user.auth}`,
        },
        params: {
          examId: examId
        }
      }).then((response) => {
        setExam(examRes)
        setQuestions(response.data)
      })
    })
  }, [examId, user.auth])

  const handleSubmit = useCallback(() => {
    console.log('Hum submit')
    setSubmitted(true)
  }, [])

  return (
    <Box
      height={"100%"}
      direction={'row'}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      justify={"center"}
      overflow={"auto"}
    >
      <Box
        style={{maxHeight: '100%'}}
        pad={'1rem'}
        align={"center"}
      >
        <Box
          border={{color: '#2E7397', size: '3px'}}
          round={'5px'}
          pad={'2rem 1rem'}
          gap={'1rem'}
          width={'1000px'}
          style={{maxHeight: '100%', minHeight: 'unset'}}
          overflow={"auto"}
          background={'#FFF'}
          height={'100%'}
        >
          {exam
            ? <>
              <Box
                border={{color: '#CCC', size: '1px', side: 'bottom'}}
                pad={'0.25rem 1rem'}
                style={{minHeight: 'unset'}}
                width={'fit-content'}
                alignSelf={"center"}
              >
                <Text weight={700} size={'2rem'}>
                  {exam.title}
                </Text>
              </Box>
              <Box
                border={{color: '#CCC', size: '1px', side: 'bottom'}}
                pad={'0.25rem 1rem'}
                style={{minHeight: 'unset'}}
                width={'fit-content'}
                alignSelf={"center"}
              >
                <Text weight={700} size={'2rem'}>
                  {exam.description}
                </Text>
              </Box>
              {}
              <Box
                border={{color: '#282828', size: '1px'}}
                pad={'1.5rem'}
                style={{minHeight: 'unset'}}
                round={'5px'}
                width={'100%'}
                alignSelf={"center"}
              >
                {questions.map((questio) => {
                  return (<></>)
                })}
                {/*<Question display={'question'} question={}/>*/}
              </Box>
              <Box
                background={submitted ? "#49a825" : 'accent'}
                round={'5px'}
                pad={'8px 16px'}
                width={'100%'}
                margin={{top: '2.5rem'}}
                alignSelf={"end"}
                hoverIndicator={submitted ? {} : {background: '#34417c'}}
                elevation={'small'}
                onClick={() => {
                  if(!submitted) handleSubmit()
                }}
                style={{cursor: 'pointer', minHeight: 'unset'}}
              >
                <Text textAlign={"center"} color={'#FFF'} weight={700}>
                  {submitted ? "Exam Created" : "Create Exam"}
                </Text>
              </Box>
            </>
            : <Spinner/>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Exam;