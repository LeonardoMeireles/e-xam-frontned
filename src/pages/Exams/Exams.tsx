import {Box, Text} from "grommet";
import {useParams} from "react-router-dom";

export function Exams(): JSX.Element {
  const {classId} = useParams();

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <Text>Exams for classId: {classId}</Text>
    </Box>
  );
};

export default Exams;