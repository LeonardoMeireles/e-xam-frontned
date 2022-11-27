import {Box, FormField, TextArea, Text, TextInput, Select, Form} from "grommet";
import {Add, Trash} from "grommet-icons";
import {useState} from "react";
import Question from "../../Question/components/Question";

export function CreateExam(): JSX.Element {

  const [questions, setQuestions] = useState<any[]>([undefined])
  const questionList = ['Test']

  return (
    <Form>
      <Box
        width={'100%'}
        margin={{bottom: '1.5rem'}}
      >
        <Text textAlign={"center"} weight={700} size={'1.5rem'}>New Exam</Text>
      </Box>
      <FormField
        width={'100%'}
        style={{fontWeight: 500}}
        name="question"
        htmlFor="text-input-id"
        label="Exam Title"
      >
        <TextInput name="question"/>
      </FormField>
      <FormField name="name" label="Description" margin={'1.5rem 0 2rem 0'} style={{fontWeight: 500}}>
        <TextArea
          id="text-input-id"
          name="title"
          style={{fontWeight: 400}}
          placeholder={'Give instructions or context for the question.'}
        />
      </FormField>
      <Text weight={700}>Questions</Text>
      <Box justify={"center"} gap={'1rem'}>
        {questions.map((question, index) => {
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
              {question
                ? <Question display={"exam-creation"}/>
                : <Select
                  placeholder={'Select a question'}
                  onChange={(event) =>
                    setQuestions((questions) => {
                      questions[index] = event.target.value
                      return [...questions]
                    })
                  }
                  options={questionList}
                />
              }
              <Trash
                height={'24px'}
                color={'#da3636'}
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setQuestions((questions) => {
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
          onClick={() => setQuestions((questions) => [...questions, undefined])}
        >
          <Add width={'24px'} height={'24px'}/>
          <Text>Add another question</Text>
        </Box>
      </Box>
      <Box
        background={'accent'}
        round={'5px'}
        pad={'8px 16px'}
        width={'100%'}
        margin={{top: '2.5rem'}}
        alignSelf={"end"}
        hoverIndicator={{background: '#34417c'}}
        elevation={'small'}
        onClick={() => console.log('Submit')}
        style={{cursor: 'pointer', minHeight: 'unset'}}
      >
        <Text textAlign={"center"} color={'#FFF'} weight={700}>
          Submit Exam
        </Text>
      </Box>
    </Form>
  );
};

export default CreateExam;