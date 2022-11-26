import {Box} from "grommet";
import CreateQuestion from "./components/CreateQuestion";
import CreateActivity from "./components/CreateActivity";

interface CreateFormProps {
  type: 'question' | 'activity' | 'exam'
}

interface Forms {
  "question": JSX.Element,
  "activity": JSX.Element
}

export function CreateForm(
  {type}: CreateFormProps
): JSX.Element {

  const forms: Forms = {
    "question": <CreateQuestion/>,
    "activity": <CreateActivity type={'activity'}/>
  }

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
          {forms[type as keyof Forms]}
        </Box>
      </Box>
    </Box>
  );
};

export default CreateForm;