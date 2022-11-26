import {Box, FormField, TextArea, Text} from "grommet";
import {RadioButton} from "grommet/es6";
import {useState} from "react";

interface QuestionProps {
  display: 'question' | 'activity'
}

export function Question(
  {display}: QuestionProps
): JSX.Element {

  const [selectedOption, setSelectedOption] = useState<number>();
  const [essayAnswer, setEssayAnswer] = useState<string>('');
  const questionType = 'essay'
  const options = ['TEST1', 'TEST2', 'TEST3']

  return (
    <>
      <Text weight={700} size={display === 'question' ? '2rem' : '1.25rem'}>Question Title</Text>
      <Text>Question description: </Text>
      {display === 'question' && questionType !== 'essay'
        ? <Box margin={'0.5rem 0 0 0'} justify={"center"} gap={'1rem'}>
          {options.map((option, index) => {
            return (
              <RadioButton
                key={index}
                name={option}
                label={option}
                checked={selectedOption === index}
                onChange={(event) => setSelectedOption(index)}
              />
            )
          })}
        </Box>
        : <FormField name="name" label="Answer" margin={'1rem 0 0 0'} style={{fontWeight: 500}}>
          <TextArea
            id="text-input-id"
            value={essayAnswer}
            onChange={(event) => setEssayAnswer(event.target.value)}
            name="Answer"
            style={{fontWeight: 400, height: '100px'}}
            placeholder={'Please give an answer for the question above.'}
          />
        </FormField>
      }
      <Box></Box>
    </>
  );
};

export default Question;