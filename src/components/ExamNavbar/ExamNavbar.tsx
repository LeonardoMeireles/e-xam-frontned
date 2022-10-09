import {Box, Image} from "grommet";
import logoTransparent from "../../assets/logo/logoTransparent.png";

export function ExamNavbar(): JSX.Element {

  return (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='darkBlue'
      pad={"1rem 2rem"}
      height={"4rem"}
      elevation='large'
    >
      <Image
        src={logoTransparent}
        height={"32px"}
      />
    </Box>
  );
};

export default ExamNavbar;