import {Box, Text} from "grommet";
import {useNavigate, useParams} from "react-router-dom";

export type ActivityType = 'question' | 'activity' | 'exam'

interface ActivityCardProps {
  type: ActivityType
}

export function ActivityCard(
  {type}: ActivityCardProps
): JSX.Element {
  const {classId} = useParams();
  const navigate = useNavigate();
  const questionId = '123'

  return (
    <Box
      height={"100%"}
      width={"40%"}
    >
      <Box
        round={'5px'}
        border={{color: '#FFF', size: '1px'}}
      >
        <Box
          justify={"between"}
          align={"center"}
          pad={'1rem'}
          round={'5px'}
          width={'100%'}
          direction={"row"}
          onClick={() => navigate(`/class/${classId}/${type}/${questionId}`)}
          border={{color: '#FFF', size: '1px', style: 'solid', side: 'bottom'}}
          hoverIndicator={{background: '#2E7397'}}
        >
          <Text size={'1.75rem'}>Calculus Exam #1</Text>
        </Box>
        <Box pad={'1rem'}>
          <Text margin={'0.5rem 0 0 0'}>The following exam relates to the classes we've had in our semester, please follow each of the questions' instruction and submit your answers. </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivityCard;