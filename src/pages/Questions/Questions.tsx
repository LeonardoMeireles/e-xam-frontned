import {Box} from "grommet";
import ActivityCard from "../../components/ActivityCard";

export function Questions(): JSX.Element {

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <ActivityCard type={"questions"}/>
    </Box>
  );
};

export default Questions;