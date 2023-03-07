import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const index = ({ title, price, persent, description, icon }) => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item>
            <Typography
              variant="h5"
              sx={{ mb: 1.5 }}
              color="text.secondary"
              gutterBottom
            >
              {price}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {persent}
              {icon}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default index;
