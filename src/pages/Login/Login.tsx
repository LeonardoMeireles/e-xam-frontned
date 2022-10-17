import {Box, Image, Text, TextInput} from "grommet";
import {Lock, User} from "grommet-icons";

import handBook from "../../assets/handBook.png"

export function Login(): JSX.Element {

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      justify={"center"}
    >
      <Box
        direction={"row"}
        height={"25rem"}
        width={"50rem"}
        alignSelf={"center"}
        style={{
          borderRadius: "10px",
          opacity: "90%"
        }}
      >
        <Box
          id={"leftPanel"}
          height={"100%"}
          width={"40%"}
          pad={"1rem"}
          background={"#2E7397"}
          style={{
            borderRadius: "10px 0 0 10px",
          }}
        >
          <Text textAlign={"center"} weight={800} size={"2rem"}>
            Welcome to E-xam!
          </Text>
          <Text textAlign={"center"} weight={400} size={"1rem"}>
            The new way to teach and study.
          </Text>
          <Box
            height={"100%"}
            alignContent={"center"}
            justify={"center"}
          >
            <Image
              src={handBook}
              width={"256px"}
              height={"256px"}
              alignSelf={"center"}
            />
          </Box>
        </Box>
        <Box
          id={"rightPanel"}
          background={"white"}
          height={"100%"}
          width={"60%"}
          pad={"1rem 4rem"}
          justify={"center"}
          style={{
            borderRadius: "0 10px 10px 0",
          }}
        >
          <Text
            textAlign={"center"}
            weight={800}
            size={"2rem"}
          >
            Login
          </Text>
          <Text
            textAlign={"center"}
            weight={400}
            size={"0.75rem"}
          >
            Please enter your details to continue
          </Text>
          <Box
            margin={"2rem 0 0 0"}
            gap={"1rem"}
          >
            <TextInput
              style={{
                fontWeight: "500"
              }}
              placeholder={"Username"}
              icon={<User/>}
            />
            <TextInput
              style={{
                fontWeight: "500"
              }}
              placeholder={"Password"}
              icon={<Lock/>}
            />
          </Box>
          <Box
            margin={"1rem 0 0 0"}
            background={'accent'}
            style={{
              borderRadius: "7px",
              cursor: "pointer"
            }}
            height={"2rem"}
            justify={"center"}
          >
            <Text textAlign={"center"} color={"white"}>Sign-in</Text>
          </Box>
          <Text
            margin={"0.75rem 0 0 0"}
            textAlign={"center"}
            size={"0.75rem"}
            weight={200}
            onClick={() => console.log("Sign-up")}
            style={{
              cursor: "pointer"
            }}
          >
            Don't have an account? <strong>Sign up for free</strong>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;