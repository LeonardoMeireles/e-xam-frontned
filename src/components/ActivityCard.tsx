import {Box, Text} from "grommet";
import {useParams} from "react-router-dom";
import {MoreVertical} from "grommet-icons";

type ActivityType = 'questions' | 'activities' | 'exams'

interface ActivityCardProps {
  type: ActivityType
}

export function ActivityCard(
  {type}: ActivityCardProps
): JSX.Element {
  const {classId} = useParams();

  return (
    <Box
      height={"100%"}
      width={"40%"}
      pad={"2rem"}
    >
      <Box
        justify={"between"}
        align={"center"}
        width={'100%'}
        direction={"row"}
        onClick={() => console.log('TEST')}
        border={{color: '#FFF', size: '1px', style: 'solid', side: 'bottom'}}
        hoverIndicator={{background: '#2E7397'}}
      >
        <Text size={'1.75rem'}>{type} {classId}</Text>
        <MoreVertical height={24}/>
      </Box>
      <Text margin={'0.5rem 0 0 0'}>Description</Text>
    </Box>
  );
};

export default ActivityCard;