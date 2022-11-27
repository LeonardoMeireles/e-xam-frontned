import {Box, Text} from "grommet";
import ActivityCard, {ActivityType} from "./components/ActivityCard";
import {useNavigate, useParams} from "react-router-dom";

export function List(): JSX.Element {

  const navigate = useNavigate();
  const {listType, classId} = useParams()

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <Box
        width={'40%'}
        margin={'0 0 2rem 0'}
        pad={'8px 0'}
        round={'5px'}
        background={'accent'}
        hoverIndicator={{background: 'hover'}}
        onClick={() => navigate(`/${classId}/new-${listType}`)}
        style={{cursor: 'pointer'}}
      >
        <Text textAlign={"center"}>Create New {listType!.charAt(0).toUpperCase() + listType!.slice(1) ?? ''}</Text>
      </Box>
      {listType &&
        <ActivityCard type={listType as ActivityType}/>
      }
    </Box>
  );
};

export default List;