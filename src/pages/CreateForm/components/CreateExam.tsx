import {Box, FormField, TextArea, Text, TextInput, Select, Form} from "grommet";
import {Add, Trash} from "grommet-icons";
import {useCallback, useContext, useEffect, useState} from "react";
import Question from "../../Question/components/Question";
import axios from "axios";
import AuthContext from "../../../providers/AuthContext";
import {useParams} from "react-router-dom";

export function CreateExam(): JSX.Element {


  const {classId} = useParams();
  const {user} = useContext(AuthContext)
  const [exam, setExam] = useState<any>({
    questionIds: [],
    title: '',
    classId: classId,
    professorEmail: user.email
  });
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [selectedQuestions, setSelectedQuestions] = useState<any[]>([]);
  const [questionList, setQuestionList] = useState<any[]>([]);
  const questionTitleList = questionList.map((question: any) => question.title)

  console.log(exam)

  const handleSubmit = useCallback(() => {
    axios.post(`http://18.231.91.30/api/exam`, {...exam}).then((res: any) => {
      setSubmitted(true);
    })
  }, [exam])

  //get questions
  useEffect(() => {
    axios.get('http://18.231.91.30/api/question/by_class_id', {
      headers: {
        Authorization: `Bearer ${user.auth}`,
      },
      params: {
        classId
      }
    }).then((res: any) => {
      setQuestionList(res.data)
    })
  }, [classId, user.auth])

  useEffect(() => {
    setExam({...exam, questionIds: selectedQuestions})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedQuestions])

  return (
    <Form
      value={exam}
      onChange={exam => setExam(exam)}
    >
      <Box
        width={'100%'}
        margin={{bottom: '1.5rem'}}
      >
        <Text textAlign={"center"} weight={700} size={'1.5rem'}>New Exam</Text>
      </Box>
      <FormField
        width={'100%'}
        style={{fontWeight: 500}}
        name="title"
        htmlFor="text-input-id"
        label="Exam Title"
      >
        <TextInput name="title"/>
      </FormField>
      <FormField name="name" label="Description" margin={'1.5rem 0 2rem 0'} style={{fontWeight: 500}}>
        <TextArea
          id="text-input-id"
          name="description"
          style={{fontWeight: 400}}
          placeholder={'Give instructions or context for the question.'}
        />
      </FormField>
      <Text weight={700}>Questions</Text>
      <Box justify={"center"} gap={'1rem'}>
        {selectedQuestions.length > 0 && selectedQuestions.map((questionId, index) => {
          return (
            <Box
              key={index}
              direction={"row"}
              justify={"between"}
              align={"center"}
              pad={'1.25rem'}
              round={'5px'}
              border={{color: '#282828', size: '1px'}}
            >
              {questionId
                ? <Question question={questionList.find((question: any) => question.id === questionId)} display={"exam-creation"}/>
                : <Select
                  placeholder={'Select a question'}
                  onChange={(event) =>
                    // setExam((exam: any) => {...exam, questionIds: [...exam.questionIds]})
                    setSelectedQuestions((questions) => {
                      questions[index] = questionList[event.selected]?.id
                      return [...questions]
                    })
                  }
                  options={questionTitleList}
                />
              }
              <Trash
                height={'24px'}
                color={'#da3636'}
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setSelectedQuestions((questions) => {
                    questions.splice(index, 1)
                    return [...questions]
                  })
                }}
              />
            </Box>
          )
        })}
        <Box
          direction={"row"}
          align={"center"}
          gap={'1.10rem'}
          margin={{top: '1rem'}}
          style={{cursor: "pointer"}}
          onClick={() => setSelectedQuestions((questions) => [...questions, undefined])}
        >
          <Add width={'24px'} height={'24px'}/>
          <Text>Add another question</Text>
        </Box>
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
    </Form>
  );
};

export default CreateExam;