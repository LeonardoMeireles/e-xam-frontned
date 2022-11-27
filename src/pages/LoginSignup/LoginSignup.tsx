import {Box, Image, Text, TextInput} from "grommet";
import {Lock, User} from "grommet-icons";

import handBook from "../../assets/handBook.png"
import {useContext, useState} from "react";
import AuthContext from "../../providers/AuthContext";
import {useNavigate} from "react-router-dom";

interface LoginSignupProps {
  type: 'LOGIN' | 'SIGNUP'
}

export function LoginSignup(
  {type}: LoginSignupProps
): JSX.Element {
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const formType = {
    LOGIN: {
      title: 'Login',
      buttonText: 'Sign-in',
      submit: handleLogin,
      subText: <p>Don\'t have an account? <strong>Sign up for free</strong></p>
    },
    SIGNUP: {
      title: 'Register',
      buttonText: 'Sign-up',
      submit: handleSignup,
      subText: <p>Already have an account? <strong>Login now</strong></p>
    }
  }

  function handleLogin() {
    setUser({
      email: 'user_email@test.com',
      role: 'professor'
    })
    navigate('/')
  }

  function handleSignup() {
    setUser({
      email: 'user_email@test.com',
      role: 'professor'
    })
    navigate('/')
  }

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
            {formType[type].title}
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
              placeholder={"Email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              icon={<User/>}
            />
            <TextInput
              style={{
                fontWeight: "500"
              }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
            hoverIndicator={{color: 'hover'}}
            onClick={() => formType[type].submit()}
            justify={"center"}
          >
            <Text textAlign={"center"} color={"white"}>
              {formType[type].buttonText}
            </Text>
          </Box>
          <Text
            margin={"0.75rem 0 0 0"}
            textAlign={"center"}
            size={"0.75rem"}
            weight={200}
            onClick={() => {
              type === 'LOGIN'
                ? navigate('/sign-up')
                : navigate('/login')
            }}
            style={{
              cursor: "pointer"
            }}
          >
            {formType[type].subText}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignup;