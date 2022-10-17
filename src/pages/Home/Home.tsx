import {Box, Text} from "grommet";
import ClassCard from "./components/ClassCard";

export function Home(): JSX.Element {

  const dummyClassData = [
    {
      classId: "123",
      className: "Test",
      professorName: "Prof. Tilambo Ucano",
      classDescription: "Some description"
    },
    {
      classId: "123",
      className: "Test",
      professorName: "Prof. Tilambo Ucano",
      classDescription: "Some description"
    },
    {
      classId: "123",
      className: "Test",
      professorName: "Prof. Tilambo Ucano",
      classDescription: "Some description"
    },
    {
      classId: "123",
      className: "Test",
      professorName: "Prof. Tilambo Ucano",
      classDescription: "Some description"
    },
    {
      classId: "123",
      className: "Test",
      professorName: "Prof. Tilambo Ucano",
      classDescription: "Some description"
    },
    {
      classId: "123",
      className: "Test",
      professorName: "Prof. Tilambo Ucano",
      classDescription: "Some description"
    },
  ]

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <Text weight={600} margin={"0 0 1rem 0"} size={"2rem"}>Classes</Text>
      <Box
        direction={"row"}
        wrap={true}
      >
        {dummyClassData.map(() => {
          return (
            <ClassCard
              classId={"123"}
              className={"Test"}
              professorName={"Prof. Tilambo Ucano"}
              classDescription={"Some description"}
            />
          )
        })}
      </Box>
    </Box>
  );
};

export default Home;