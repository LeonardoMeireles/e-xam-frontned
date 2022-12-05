import {Box, Text} from "grommet";
import ActivityCard, {ActivityType} from "./components/ActivityCard";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../providers/AuthContext";
import axios from "axios";

export function List(): JSX.Element {

  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const {listType, classId} = useParams()
  const [list, setList] = useState<any []>([])

  //get list
  useEffect(() => {
    axios.get(`http://18.231.91.30/api/${listType}/by_class_id`, {
      headers: {
        Authorization: `Bearer ${user.auth}`,
      },
      params: {
        classId: classId
      }
    }).then((res: any) => {
      setList(res.data)
    })
  }, [classId, listType, user.auth])

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      pad={"2rem"}
      overflow={"auto"}
    >
      {user.role === 'PROFESSOR' && (
        <Box
          width={'40%'}
          margin={'0 0 2rem 0'}
          pad={'16px 0'}
          round={'5px'}
          background={'accent'}
          hoverIndicator={{background: 'hover'}}
          onClick={() => navigate(`/class/${classId}/new-${listType}`)}
          style={{cursor: 'pointer'}}
        >
          <Text textAlign={"center"}>Create New {listType!.charAt(0).toUpperCase() + listType!.slice(1) ?? ''}</Text>
        </Box>
      )}
      {list && list.map((listItem) => {
          return (
            <ActivityCard key={listItem.id} type={listType as ActivityType}  id={listItem.id} description={listItem.description ?? listItem.instruction} title={listItem.title}/>
          )
        })
      }
    </Box>
  );
};

export default List;