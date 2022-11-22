import {Box} from "grommet";
import ActivityCard from "../../components/ActivityCard";

export function Activities(): JSX.Element {

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <ActivityCard type={'activities'}/>
    </Box>
  );
};

export default Activities;