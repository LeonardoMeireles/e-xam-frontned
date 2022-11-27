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
        justify={"between"}
        align={"center"}
        width={'100%'}
        direction={"row"}
        onClick={() => navigate(`/${classId}/${type}/${questionId}`)}
        border={{color: '#FFF', size: '1px', style: 'solid', side: 'bottom'}}
        hoverIndicator={{background: '#2E7397'}}
      >
        <Text size={'1.75rem'}>{type} {classId}</Text>
      </Box>
      <Text margin={'0.5rem 0 0 0'}>Description</Text>
    </Box>
  );
};

export default ActivityCard;