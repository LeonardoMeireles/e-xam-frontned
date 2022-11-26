import {Box, Text} from "grommet";
import Question from "../Question/components/Question";

interface ActivityProps {
  type: 'activity' | 'exam'
}

export function Activity(
  {type}: ActivityProps
): JSX.Element {

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
          <Box
            border={{color: '#CCC', size: '1px', side: 'bottom'}}
            pad={'0.25rem 1rem'}
            style={{minHeight: 'unset'}}
            width={'fit-content'}
            alignSelf={"center"}
          >
            <Text weight={700} size={'2rem'}>
              {type === 'activity' ? 'Activity' : 'Exam'} Title
            </Text>
          </Box>
          <Box
            border={{color: '#282828', size: '1px'}}
            pad={'1.5rem'}
            style={{minHeight: 'unset'}}
            round={'5px'}
            width={'100%'}
            alignSelf={"center"}
          >
            <Question display={'activity'}/>
          </Box>
          <Box
            border={{color: '#282828', size: '1px'}}
            pad={'1.5rem'}
            style={{minHeight: 'unset'}}
            round={'5px'}
            width={'100%'}
            alignSelf={"center"}
          >
            <Question display={'activity'}/>
          </Box>
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
            style={{cursor: 'pointer', minHeight: 'unset'}}
          >
            <Text textAlign={"center"} color={'#FFF'} weight={700}>
              Submit {type === 'activity' ? 'Activity' : 'Exam'}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Activity;