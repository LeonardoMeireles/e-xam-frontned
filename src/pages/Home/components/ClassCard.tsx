import {Box, Card, CardBody, CardFooter, CardHeader, Text} from "grommet";
import {useNavigate} from "react-router-dom";

interface ClassCardProps {
  id: string,
  name: string,
  description: string,
  professorName: string,
}

export function ClassCard(
  {
    id,
    name,
    description,
    professorName
  }: ClassCardProps
): JSX.Element {

  const navigate = useNavigate();

  return (
    <Card
      width={"200px"}
      height={"220px"}
      margin={"1rem 1rem 0 0"}
      onClick={() => navigate(`/class/${id}/exam`)}
    >
      <CardHeader
        background={"#2E7397"}
        pad={"8px"}
        direction={"column"}
        align={"start"}
      >
        <Box>
          <Text size={"medium"}>{name}</Text>
          <Text size={"small"}>{professorName}</Text>
        </Box>
      </CardHeader>
      <CardBody
        background={"#FFF"}
        pad={"8px"}
      >
        <Text size={"small"}>Class description:</Text>
        <Text size={"small"}>{description}</Text>
      </CardBody>
      <CardFooter/>
    </Card>
  );
};

export default ClassCard;