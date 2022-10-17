import {Box, Image, Text} from "grommet";
import logoTransparent from "../../assets/logo/logoTransparent.png";
import {useNavigate} from "react-router-dom";

export function ExamNavbar(): JSX.Element {

  const navigate = useNavigate()

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
          height={"32px"}
          onClick={() => navigate("") }
          style={{
            cursor: "pointer"
          }}
        />
      </Box>
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