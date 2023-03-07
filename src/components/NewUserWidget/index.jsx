import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUser } from "../../services/getUser";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((res) => {
        setUsers(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          New users have joined
        </Typography>
        {users.map((user) => {
          return (
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Avatar alt="" src={user.avatar} />
              </Grid>
              <Grid itemRef="">
                <Typography
                  component="h5"
                  align="center"
                  style={{ fontSize: "bold" }}
                  gutterBottom
                >
                  {user.name}
                </Typography>
                <Typography
                  variant="caption"
                  component="h6"
                  align="center"
                  sx={{ fontSize: "bold" }}
                  color="#9e9e9e"
                >
                  {user.role}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    padding: "3px",
                    borderRadius: "5px",
                  }}
                >
                  <RemoveRedEyeIcon
                    fontSize="small"
                    sx={{ color: grey[800] }}
                  />
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Index;
