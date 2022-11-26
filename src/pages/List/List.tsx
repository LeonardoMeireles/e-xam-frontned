import {Box} from "grommet";
import ActivityCard, {ActivityType} from "./components/ActivityCard";
import {useParams} from "react-router-dom";

export function List(): JSX.Element {

  const {listType} = useParams()

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      pad={"2rem"}
      overflow={"auto"}
    >
      {listType &&
        <ActivityCard type={listType as ActivityType}/>
      }
    </Box>
  );
};

export default List;