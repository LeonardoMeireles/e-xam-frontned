import {Box, Image, Text} from "grommet";
import logoTransparent from "../../assets/logo/logoTransparent.png";
import {matchPath, NavLink, useLocation, useNavigate} from "react-router-dom";
import {CSSProperties} from "react";

export function ExamNavbar(): JSX.Element {

  const navigate = useNavigate()
  const {pathname} = useLocation();
  const classId = matchPath({path: '/:classId', end: false}, pathname)?.params.classId;

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
      {classId && (
        <Box direction={"row"} gap={"4rem"}>
          <NavLink
            to={`/${classId}/exams`}
            style={({ isActive }) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Exams
          </NavLink>
          <NavLink
            to={`/${classId}/activities`}
            style={({ isActive }) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Activities
          </NavLink>
          <NavLink
            to={`/${classId}/questions`}
            style={({ isActive }) =>
              isActive ? selectedStyle : unselectedStyle
            }
          >
            Questions
          </NavLink>
        </Box>
      )}
      <Box>
        <Box
          height={"2rem"}
          pad={"0.5rem"}
          justify={"center"}
          background={"accent"}
          onClick={() => navigate("/login")}
          style={{
            borderRadius: "7px"
          }}
        >
          <Text
            color={"white"}
          >
            Login
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ExamNavbar;