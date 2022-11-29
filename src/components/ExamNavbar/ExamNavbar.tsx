import {Box, Image, Text} from "grommet";
import logoTransparent from "../../assets/logo/logoTransparent.png";
import {matchPath, NavLink, useLocation, useNavigate} from "react-router-dom";
import {CSSProperties, useContext} from "react";
import AuthContext from "../../providers/AuthContext";

export function ExamNavbar(): JSX.Element {

  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const classId = matchPath({path: '/class/:classId', end: false}, pathname)?.params.classId;

  const selectedStyle: CSSProperties = {
    textDecoration: "unset",
    height: '100%',
    padding: '0 8px 4px 8px',
    color: '#FFF',
    borderBottom: '2px solid #0FC0E7'
  }

  const unselectedStyle: CSSProperties = {
    textDecoration: "unset",
    padding: '0 8px 4px 8px',
    color: '#FFF',
    height: '100%',
  }

  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='base'
      pad={"1rem 2rem"}
      height={"4rem"}
      elevation='large'
    >
      <Box>
        <Image
          src={logoTransparent}
          height={"24px"}
          onClick={() => navigate("")}
          style={{
            cursor: "pointer"
          }}
        />
      </Box>
      {!classId && user?.role === 'admin' && (
        <Box direction={"row"} gap={'0.75rem'}>
          <NavLink
            to={`/admin/pending`}
            style={({isActive}) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Pending Approval
          </NavLink>
          <NavLink
            to={`/admin/active`}
            style={({isActive}) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Active Users
          </NavLink>
        </Box>
      )}
      {classId && (
        <Box direction={"row"} gap={"4rem"}>
          <NavLink
            to={`/class/${classId}/exam`}
            style={({isActive}) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Exams
          </NavLink>
          <NavLink
            to={`/class/${classId}/question`}
            style={({isActive}) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Questions
          </NavLink>
        </Box>
      )}
      <Box gap={'0.75rem'} direction={"row"}>
        <Box
          height={"2rem"}
          pad={"0.5rem"}
          justify={"center"}
          background={"#f34f4f"}
          onClick={() => {
            logOut();
            navigate("/login")
          }}
          style={{
            borderRadius: "7px"
          }}
        >
          <Text
            color={"white"}
          >
            Logout
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ExamNavbar;