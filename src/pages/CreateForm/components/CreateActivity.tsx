import {Box, FormField, TextArea, Text, TextInput, Select, Form} from "grommet";
import {Add} from "grommet-icons";
import {useState} from "react";
import Question from "../../Question/components/Question";

export function CreateQuestion(): JSX.Element {

  const [questions, setQuestions] = useState([])

  return (
    <Form>
      <Box direction={"row"} gap={'0.75rem'} justify={"between"}>
        <FormField
          width={'100%'}
          style={{fontWeight: 500}}
          name="question"
          htmlFor="text-input-id"
          label="Activity Title"
        >
          <TextInput name="question"/>
        </FormField>
      </Box>
      <Box margin={'2rem 0 1rem 0'} justify={"center"} gap={'1rem'}>
        {questions.map((question, index) => {
          return (
            <Question display={"activity"}/>
          )
        })}
        <Box
          direction={"row"}
          align={"center"}
          gap={'1.10rem'}
          style={{cursor: "pointer"}}
          onClick={() => console.log('Test')}
        >
          <Add width={'24px'} height={'24px'}/>
          <Text>Add another question</Text>
        </Box>
      </Box>
    </Form>
  );
};

export default CreateQuestion;