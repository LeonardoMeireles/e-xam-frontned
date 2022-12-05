import {Box, FormField, TextArea, Text, TextInput, Select, Form} from "grommet";
import {Add} from "grommet-icons";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


enum QuestionType {
  MULTIPLE_CHOICE = 'multiple choice',
  ESSAY = 'essay'
}

export function CreateQuestion(): JSX.Element {
  const questionTypes = Object.values(QuestionType);
  const {classId} = useParams();
  const [question, setQuestion] = useState<any>({
    title: '',
    classId,
  });
  const [questionType, setQuestionType] = useState<string>(questionTypes[0]);
  const [options, setOptions] = useState<string[]>([''])
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = useCallback(() => {
    axios.post(`http://18.231.91.30/api/question`,
      {...question},
      // {Authorization: `Bearer ${}`}
    ).then((res: any) => {
      setSubmitted(true);
    })
  }, [question])

  useEffect(() => {
    setQuestion((question: any) => {
      return {
        ...question,
        choices: options
      }
    })
  }, [options])

  console.log(question)

  return (
    <Form
      value={question}
      onChange={nextValue => setQuestion({...nextValue, classId: classId})}
    >
      <Box direction={"row"} gap={'0.75rem'} justify={"between"}>
        <FormField
          width={'80%'}
          style={{fontWeight: 500}}
          name="title"
          htmlFor="text-input-id"
          label="Title"
        >
          <TextInput name="title"/>
        </FormField>
        <FormField name="type" label="Question Type" style={{fontWeight: 500}}>
          <Select
            value={questionType}
            name="questionType"
            style={{fontWeight: 400}}
            onChange={(event) => {
              setQuestion((question: any) => {
                if (event.target.value === 'multiple choice') {
                  return {title: question?.title, instructions: '', options: options};
                }
                return {title: question?.title, instructions: ''};
              });
              setQuestionType(event.target.value);
            }}
            options={questionTypes}
          />
        </FormField>
      </Box>
      <FormField name="instruction" label="Instructions" margin={'1rem 0 1rem 0'} style={{fontWeight: 500}}>
        <TextArea
          id="text-input-id"
          name="instruction"
          style={{fontWeight: 400}}
          placeholder={'Give instructions or context for the question.'}
        />
      </FormField>
      {questionType === 'multiple choice' && (
        <Box margin={'2rem 0 1rem 0'} justify={"center"} gap={'1rem'}>
          {options.map((option, index) => {
            return (
              <Box key={index} direction={"row"} align={"center"} gap={'0.5rem'}>
                <Box round={'100%'} width={'24px'} height={'24px'} border={{color: '#CCC', size: '3px'}}/>
                <TextInput
                  value={option}
                  onChange={(event) => {
                    setOptions((options) => {
                      let tempOptions = [...options];
                      tempOptions[index] = event.target.value;
                      return tempOptions;
                    })
                  }}
                  style={{border: 0, fontWeight: 400}}
                  placeholder={`Option ${index + 1}`}
                />
              </Box>
            )
          })}
          <Box
            direction={"row"}
            align={"center"}
            gap={'1.10rem'}
            style={{cursor: "pointer"}}
            onClick={() => setOptions((options) => {
              return [...options, ''];
            })}
          >
            <Add width={'24px'} height={'24px'}/>
            <Text>Add another option</Text>
          </Box>
        </Box>
      )}
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
          if (!submitted) handleSubmit()
        }}
        style={{cursor: 'pointer', minHeight: 'unset'}}
      >
        <Text textAlign={"center"} color={'#FFF'} weight={700}>
          {submitted ? "Question Created" : 'Create Question'}
        </Text>
      </Box>
    </Form>
  );
};

export default CreateQuestion;