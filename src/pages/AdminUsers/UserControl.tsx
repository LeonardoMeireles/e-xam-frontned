import {Box, Table, TableBody, TableCell, TableHeader, TableRow, Text} from "grommet";

interface UserControlProps {
  userType: 'Active' | 'Pending'
}

export function UserControl(
  {userType}: UserControlProps
): JSX.Element {

  const users = [
    {
      email: 'test@test.com',
      name: 'Leonardo M',
      role: 'Student'
    }
  ]

  return (
    <Box
      height={"100%"}
      width={"100%"}
      background={"darkBlue"}
      pad={"2rem"}
      overflow={"auto"}
    >
      <Text weight={600} margin={"0 0 1rem 0"} size={"2rem"}>{userType} Users</Text>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope={'col'} border={'bottom'}>
              Email
            </TableCell>
            <TableCell scope={'col'} border={'bottom'}>
              Name
            </TableCell>
            <TableCell scope={'col'} border={'bottom'}>
              Role
            </TableCell>
            <TableCell/>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: any) => {
            return (
              <TableRow>
                <TableCell scope={'row'}>
                  <strong>{user.email}</strong>
                </TableCell>
                <TableCell>
                  {user.name}
                </TableCell>
                <TableCell>
                  {user.role}
                </TableCell>
                <TableCell style={{alignItems: 'end'}}>
                  {userType === 'Pending'
                    ? (
                      <Box
                        height={"2rem"}
                        width={'fit-content'}
                        pad={"0.5rem"}
                        justify={"center"}
                        background={"#49a825"}
                        onClick={() => console.log('Test')}
                        style={{
                          borderRadius: "7px"
                        }}
                      >
                        <Text color={"white"}>
                          Approve
                        </Text>
                      </Box>
                    )
                    : (
                      <Box
                        height={"2rem"}
                        width={'fit-content'}
                        pad={"0.5rem"}
                        justify={"center"}
                        background={"#911717"}
                        onClick={() => console.log('Test')}
                        style={{
                          borderRadius: "7px"
                        }}
                      >
                        <Text color={"white"}>
                          Remove
                        </Text>
                      </Box>
                    )
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UserControl;