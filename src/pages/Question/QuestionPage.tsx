import {Box, Text} from "grommet";
import Question from "./components/Question";
import {useState} from "react";

export function QuestionPage(): JSX.Element {

  const [answer, setAnswer] = useState('');

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
          pad={'2rem'}
          gap={'1rem'}
          width={'800px'}
          style={{maxHeight: '100%'}}
          overflow={"auto"}
          background={'#FFF'}
          height={'100%'}
        >
          <Question display={'question'}/>
          <Box
            background={'accent'}
            round={'5px'}
            pad={'8px 16px'}
            width={'100%'}
            margin={{top: '1.25rem'}}
            alignSelf={"end"}
            hoverIndicator={{background: '#34417c'}}
            elevation={'small'}
            onClick={() => console.log('Submit')}
            style={{cursor: 'pointer'}}
          >
            <Text textAlign={"center"} color={'#FFF'} weight={700}>Submit Answer</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionPage;