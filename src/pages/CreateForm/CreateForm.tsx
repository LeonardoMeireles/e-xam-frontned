import {Box, Form, FormField, TextInput, Select, TextArea, RadioButton, Text} from "grommet";
import {useState} from "react";
import {Add} from "grommet-icons";

interface CreateFormProps {
  type: string
}

export function CreateForm(
  {type}: CreateFormProps
): JSX.Element {

  const questionTypes = ['multiple choice', 'essay'];
  const [questionType, setQuestionType] = useState<string>(questionTypes[0]);
  const [options, setOptions] = useState<string[]>([''])

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
        overflow={"auto"}
        style={{maxHeight: '100%'}}
        pad={'1rem'}
        align={"center"}
      >
          <Box
            border={{color: '#2E7397', size: '3px'}}
            round={'5px'}
            pad={'2rem'}
            width={'800px'}
            background={'#FFF'}
            height={'100%'}
          >
            <Form>
              <Box direction={"row"} gap={'0.75rem'} justify={"between"}>
                <FormField width={'80%'} style={{fontWeight: 500}} name="question" htmlFor="text-input-id" label="Question">
                  <TextInput name="question"/>
                </FormField>
                <FormField name="type" label="Question" style={{fontWeight: 500}}>
                  <Select
                    value={questionType}
                    name="Question"
                    style={{fontWeight: 400}}
                    onChange={(event) => setQuestionType(event.target.value)}
                    options={questionTypes}
                  />
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
              {questionType === 'multiple choice' && (
                <Box margin={'2rem 0 1rem 0'} justify={"center"} gap={'1rem'}>
                  {options.map((option, index) => {
                    return (
                      <Box key={index} direction={"row"} align={"center"} gap={'0.5rem'}>
                        <Box round={'100%'} width={'24px'} height={'24px'} border={{color: '#CCC', size: '3px'}}/>
                        <TextInput
                          value={option}
                          onChange={(event) => {
                            setOptions((options) => {
                              let tempOptions = [...options];
                              tempOptions[index] = event.target.value;
                              return tempOptions;
                            })
                          }}
                          style={{border: 0, fontWeight: 400}}
                          placeholder={'Option 1'}
                        />
                      </Box>
                    )
                  })}
                  <Box
                    direction={"row"}
                    align={"center"}
                    gap={'1.10rem'}
                    style={{cursor: "pointer"}}
                    onClick={() => setOptions((options) => {
                      return [...options, ''];
                    })}
                  >
                    <Add width={'24px'} height={'24px'}/>
                    <Text>Add another option</Text>
                  </Box>
                </Box>
              )}
            </Form>
          </Box>
      </Box>
    </Box>
  );
};

export default CreateForm;