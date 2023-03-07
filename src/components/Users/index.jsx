import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { getUser } from "../../services/getUser";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { blue, red } from "@mui/material/colors";





const Index = () => {
  const [users, setUsers] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "First name",
      width: 250,
      renderCell: (params) => {
        return (
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item>
              <Avatar src={params.row.avatar} />
            </Grid>
            <Grid item>
              <Typography>{params.row.name}</Typography>
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "role",
      headerName: "Role",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item>
              <Link to={`/user/${params.row.id}`}>
                <EditIcon sx={{ color: blue[400], cursor: "pointer" }} />
              </Link>
            </Grid>
            <Grid item>
              <DeleteForeverIcon
                onClick={() => userDelete(params.row.id)}
                sx={{ color: red[400], cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        );
      },
    },
  ];

  const userDelete = (id) => {
    console.log(id);
   
    const filterdUser = users.filter(x => x.id !== id)
    setUsers(filterdUser);
  };

  useEffect(() => {
    getUser()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default Index;
