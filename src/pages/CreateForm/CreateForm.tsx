import {Box} from "grommet";
import CreateQuestion from "./components/CreateQuestion";

interface CreateFormProps {
  type: 'question' | 'activity' | 'exam'
}

export function CreateForm(
  {type}: CreateFormProps
): JSX.Element {

  return (
    <Box
      height={"100%"}
      direction={'row'}
      width={"100%"}
      background={"darkBlue"}
      align={"center"}
      justify={"center"}
      overflow={"auto"}
    >
      <Box
        id={'leftPanel'}
        style={{maxHeight: '100%'}}
        pad={'1rem'}
        align={"center"}
      >
        <Box
          border={{color: '#2E7397', size: '3px'}}
          round={'5px'}
          pad={'2rem'}
          width={'800px'}
          style={{maxHeight: '100%'}}
          overflow={"auto"}
          background={'#FFF'}
          height={'100%'}
        >
          <CreateQuestion />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateForm;