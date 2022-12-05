import {Box, FormField, TextArea, Text, TextInput, Select, Form} from "grommet";
import {Add, Trash} from "grommet-icons";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Question from "../Question/components/Question";

export function ClassCreation(): JSX.Element {
  const [classroom, setClassroom] = useState<any>({
    name: '',
  });
  const [students, setStudents] = useState<string[]>([''])
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = useCallback(() => {
    axios.post(`http://18.231.91.30/api/class`,
      {...classroom},
      // {Authorization: `Bearer ${}`}
    ).then((res: any) => {
      setSubmitted(true);
    })
  }, [classroom])

  useEffect(() => {
    setClassroom((classroom: any) => {
      return {
        ...classroom,
        choices: students
      }
    })
  }, [students])

  return (
    <></>
    // <Form
    //   value={classroom}
    //   onChange={nextValue => setClassroom({...nextValue})}
    // >
    //   <Box direction={"row"} gap={'0.75rem'} justify={"between"}>
    //     <FormField
    //       width={'80%'}
    //       style={{fontWeight: 500}}
    //       name="title"
    //       htmlFor="text-input-id"
    //       label="Title"
    //     >
    //       <TextInput name="title"/>
    //     </FormField>
    //     <FormField name="professorEmail" label="Professor Email" margin={'1rem 0 1rem 0'} style={{fontWeight: 500}}>
    //       <TextArea
    //         id="text-input-id"
    //         name="professorEmail"
    //         style={{fontWeight: 400}}
    //         placeholder={'Professor\'s email'}
    //       />
    //     </FormField>
    //   </Box>
    //   <FormField name="description" label="Description" margin={'1rem 0 1rem 0'} style={{fontWeight: 500}}>
    //     <TextArea
    //       id="text-input-id"
    //       name="description"
    //       style={{fontWeight: 400}}
    //       placeholder={'Give instructions or context for the question.'}
    //     />
    //   </FormField>
    //   <Box justify={"center"} gap={'1rem'}>
    //     {students.length > 0 && students.map((questionId, index) => {
    //       return (
    //         <Box
    //           key={index}
    //           direction={"row"}
    //           justify={"between"}
    //           align={"center"}
    //           pad={'1.25rem'}
    //           round={'5px'}
    //           border={{color: '#282828', size: '1px'}}
    //         >
    //           {questionId
    //             ? <Question question={questionList.find((question: any) => question.id === questionId)} display={"exam-creation"}/>
    //             : <Select
    //               placeholder={'Select a question'}
    //               onChange={(event) =>
    //                 // setExam((exam: any) => {...exam, questionIds: [...exam.questionIds]})
    //                 setSelectedQuestions((questions) => {
    //                   questions[index] = questionList[event.selected]?.id
    //                   return [...questions]
    //                 })
    //               }
    //               options={questionTitleList}
    //             />
    //           }
    //           <Trash
    //             height={'24px'}
    //             color={'#da3636'}
    //             style={{
    //               cursor: 'pointer'
    //             }}
    //             onClick={() => {
    //               setSelectedQuestions((questions) => {
    //                 questions.splice(index, 1)
    //                 return [...questions]
    //               })
    //             }}
    //           />
    //         </Box>
    //       )
    //     })}
    //     <Box
    //       direction={"row"}
    //       align={"center"}
    //       gap={'1.10rem'}
    //       margin={{top: '1rem'}}
    //       style={{cursor: "pointer"}}
    //       onClick={() => setSelectedQuestions((questions) => [...questions, undefined])}
    //     >
    //       <Add width={'24px'} height={'24px'}/>
    //       <Text>Add another question</Text>
    //     </Box>
    //   </Box>
    //   <Box
    //     background={submitted ? "#49a825" : 'accent'}
    //     round={'5px'}
    //     pad={'8px 16px'}
    //     width={'100%'}
    //     margin={{top: '2.5rem'}}
    //     alignSelf={"end"}
    //     hoverIndicator={submitted ? {} : {background: '#34417c'}}
    //     elevation={'small'}
    //     onClick={() => {
    //       if (!submitted) handleSubmit()
    //     }}
    //     style={{cursor: 'pointer', minHeight: 'unset'}}
    //   >
    //     <Text textAlign={"center"} color={'#FFF'} weight={700}>
    //       {submitted ? 'Create Question' : "Question Created"}
    //     </Text>
    //   </Box>
    // </Form>
  );
};

export default ClassCreation;