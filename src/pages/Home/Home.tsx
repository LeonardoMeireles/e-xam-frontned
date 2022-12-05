import {Box, Text} from "grommet";
import ClassCard from "./components/ClassCard";
import {useContext, useEffect} from "react";
import AuthContext from "../../providers/AuthContext";
import axios from "axios";

export function Home(): JSX.Element {

  const dummyClassData = [
    {
      id: 123,
      name: 'Test',
      description: 'Some description',
      professorEmail: 'dayde_costa@hotmail.com',
    },
  ]

  const {user} = useContext(AuthContext)

  //get classes
  useEffect(() => {
    if( user.role === 'STUDENT') {
      axios.get(`http://18.231.91.30/api/class/by_student`, {
        headers: {
          Authorization: `Bearer ${user.auth}`,
        },
        params: {
          studentId: user.id
        }
      }).then((res: any) => {
        console.log(res)
      })
    } else {
      axios.get(`http://18.231.91.30/api/class/by_professor`, {
        headers: {
          Authorization: `Bearer ${user.auth}`,
        },
        params: {
          professorEmail: user.email
        }
      }).then((res: any) => {
      })
    }
  }, [user.auth, user.id, user.role, user.email])

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
              classroom={classroom}
            />
          )
        })}
      </Box>
    </Box>
  );
};

export default Home;