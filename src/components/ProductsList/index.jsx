import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Avatar, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { blue, red } from "@mui/material/colors";
import { getProducts } from "../../services/getProducts";

const Index = () => {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "title",
      width: 350,
      renderCell: (params) => {
        return (
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item>
              <Avatar
                sx={{ width: 70, height: 100 }}
                variant="rounded"
                src={params.row.images}
              />
            </Grid>
            <Grid item>
              <Typography>{params.row.title}</Typography>
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: "price",
      headerName: "price",
      width: 250,
    },
    {
      field: "Category",
      headerName: "Category",
      width: 250,
      renderCell: (params) => {
        return (
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item>
              <Avatar
                sx={{ width: 24, height: 24 }}
                src={params.row.category.image}
              />
            </Grid>
            <Grid item>
              <Typography>{params.row.category.name}</Typography>
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: "actions",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item>
              <Link to={`/product/${params.row.id}`}>
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

    const filterdUser = products.filter((x) => x.id !== id);
    setProducts(filterdUser);
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data)
        setProducts(res.data.slice(0,9));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box sx={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default Index;
