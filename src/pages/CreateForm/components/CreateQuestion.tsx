import {Box, FormField, TextArea, Text, TextInput, Select, Form} from "grommet";
import {Add} from "grommet-icons";
import {useState} from "react";


enum QuestionType {
  MULTIPLE_CHOICE = 'multiple choice',
  ESSAY = 'essay'
}

export function CreateQuestion(): JSX.Element {
  const questionTypes = Object.values(QuestionType);
  const [questionType, setQuestionType] = useState<string>(questionTypes[0]);
  const [options, setOptions] = useState<string[]>([''])

  return (
    <Form>
      <Box direction={"row"} gap={'0.75rem'} justify={"between"}>
        <FormField
          width={'80%'}
          style={{fontWeight: 500}}
          name="question"
          htmlFor="text-input-id"
          label="Question"
        >
          <TextInput name="question"/>
        </FormField>
        <FormField name="type" label="Question Type" style={{fontWeight: 500}}>
          <Select
            value={questionType}
            name="Question"
            style={{fontWeight: 400}}
            onChange={(event) => setQuestionType(event.target.value)}
            options={questionTypes}
          />
        </FormField>
      </Box>
      <FormField name="name" label="Instructions" margin={'1rem 0 1rem 0'} style={{fontWeight: 500}}>
        <TextArea
          id="text-input-id"
          name="title"
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
    </Form>
  );
};

export default CreateQuestion;