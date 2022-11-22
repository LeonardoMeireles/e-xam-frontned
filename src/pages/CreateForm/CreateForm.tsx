import {Box, Form, FormField, TextInput, Select, TextArea} from "grommet";

interface CreateFormProps {
  type: string
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
      justify={"between"}
      overflow={"auto"}
    >
      <Box
        id={'leftPanel'}
        width={'70%'}
        pad={'1rem'}
        height={'100%'}
        align={"center"}
      >
          <Box
            border={{color: '#2E7397', size: '3px'}}
            round={'5px'}
            pad={'1.5rem'}
            width={'800px'}
            background={'#FFF'}
            height={'100%'}
          >
            <Form>
              <Box direction={"row"} gap={'0.75rem'} justify={"between"}>
                <FormField width={'80%'} style={{fontWeight: 500}} name="question" htmlFor="text-input-id" label="Title">
                  <TextInput name="question"/>
                </FormField>
                <FormField name="type" label="Type" style={{fontWeight: 500}}>
                  <Select name="type"  options={['multiple choice', 'essay']}/>
                </FormField>
              </Box>
              <FormField name="name" label="Instructions" margin={'1rem 0 1rem 0'} style={{fontWeight: 500}}>
                <TextArea
                  id="text-input-id"
                  name="title"
                  style={{fontWeight: 400}}
                  placeholder={'Give instructions to help answer the question (optional) '}
                />
              </FormField>
            </Form>
          </Box>
      </Box>
      <Box
        id={'rightPanel'}
        width={'350px'}
        height={'100%'}
        background={'#FFF'}
        border={{color: '#2E7397', size: '3px', side: 'left'}}
      >
        <Form>

        </Form>
      </Box>
    </Box>
  );
};

export default CreateForm;