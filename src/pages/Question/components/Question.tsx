import {Box, FormField, TextArea, Text} from "grommet";
import {RadioButton} from "grommet/es6";
import {useEffect, useState} from "react";

interface Question {
  id: number,
  title: string,
  instruction: string,
  choices: string[],
  answer: number,
  classId: number
}

interface QuestionProps {
  display: 'question' | 'exam-creation',
  question: Question
  setAnswers?: (value: (((prevState: string[]) => string[]) | string[])) => void,
}

export function Question(
  {
    display,
    question,
    setAnswers,
  }: QuestionProps
): JSX.Element {

  const [selectedOption, setSelectedOption] = useState<number>();
  const [essayAnswer, setEssayAnswer] = useState<string>('');
  const questionType = question.choices.length > 0 ? 'multiple choices' : 'essay';

  useEffect(() => {
    if(!setAnswers) return
    if(questionType === 'essay'){
      setAnswers((answers: string[]) => [...answers, essayAnswer])
    } else if(selectedOption) {
      setAnswers((answers: string[]) => [...answers, question.choices[selectedOption]])
    }
  }, [selectedOption, essayAnswer])

  return (
    <Box width={'100%'}>
      <Text weight={700} size={display === 'question' ? '2rem' : '1.25rem'}>{question.title}e</Text>
      <Text>{question.instruction}</Text>
      {display !== "exam-creation" && (
        <>
          {questionType !== 'essay'
            ? <Box margin={'0.5rem 0 0 0'} justify={"center"} gap={'1rem'}>
              {question.choices.map((option, index) => {
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
        </>
      )}
    </Box>
  );
};

export default Question;