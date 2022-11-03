import {Box, Text} from "grommet";
import ClassCard from "./components/ClassCard";

export function Home(): JSX.Element {

  const dummyClassData = [
    {
      id: "123",
      name: "Test",
      professorName: "Prof. Tilambo Ucano",
      description: "Some description"
    },
    {
      id: "124",
      name: "Test",
      professorName: "Prof. Tilambo Ucano",
      description: "Some description"
    },
    {
      id: "125",
      name: "Test",
      professorName: "Prof. Tilambo Ucano",
      description: "Some description"
    },
    {
      id: "126",
      name: "Test",
      professorName: "Prof. Tilambo Ucano",
      description: "Some description"
    },
    {
      id: "127",
      name: "Test",
      professorName: "Prof. Tilambo Ucano",
      description: "Some description"
    },
    {
      id: "128",
      name: "Test",
      professorName: "Prof. Tilambo Ucano",
      description: "Some description"
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
        {dummyClassData.map((classroom) => {
          return (
            <ClassCard
              key={classroom.id}
              id={classroom.id}
              name={classroom.name}
              professorName={classroom.name}
              description={classroom.description}
            />
          )
        })}
      </Box>
    </Box>
  );
};

export default Home;