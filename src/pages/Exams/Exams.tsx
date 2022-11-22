import {Box} from "grommet";
import ActivityCard from "../../components/ActivityCard";

export function Exams(): JSX.Element {

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <ActivityCard type={"exams"}/>
    </Box>
  );
};

export default Exams;