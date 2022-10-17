import {Box, Card, CardBody, CardFooter, CardHeader, Text} from "grommet";
import {useNavigate} from "react-router-dom";

interface ClassCardProps {
  classId: string,
  className: string,
  classDescription: string,
  professorName: string,
}

export function ClassCard(
  {
    classId,
    className,
    classDescription,
    professorName
  }: ClassCardProps
): JSX.Element {

  const navigate = useNavigate();

  return (
    <Card
      width={"200px"}
      height={"220px"}
      margin={"1rem 1rem 0 0"}
      onClick={() => navigate(`classroom/${classId}`)}
    >
      <CardHeader
        background={"#2E7397"}
        pad={"8px"}
        direction={"column"}
        align={"start"}
      >
        <Box>
          <Text size={"medium"}>{className}</Text>
          <Text size={"small"}>{professorName}</Text>
        </Box>
      </CardHeader>
      <CardBody
        background={"#FFF"}
        pad={"8px"}
      >
        <Text size={"small"}>Class description:</Text>
        <Text size={"small"}>{classDescription}</Text>
      </CardBody>
      <CardFooter/>
    </Card>
  );
};

export default ClassCard;