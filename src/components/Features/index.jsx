import { Grid } from "@mui/material";
import Cards from "./Cards/index";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { pink } from "@mui/material/colors";

const index = () => {
  const fetures = [
    {
      title: "Revanue",
      price: "$2.415",
      persent: -11.4,
      description: "compared to last month",
      icon: <ArrowDownwardIcon sx={{ color: pink[500] }} />,
    },
    {
      title: "Sales",
      price: "$4.415",
      persent: -1.4,
      description: "compared to last month",
      icon: <ArrowDownwardIcon sx={{ color: pink[500] }} />,
    },
    {
      title: "Cost",
      price: "$2.225",
      persent: +2.4,
      description: "compared to last month",
      icon: <ArrowUpwardIcon color="success" />,
    },
  ];
  return (
    <Grid container spacing={2} >
      
        {fetures.map((f , index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Cards
                
                title={f.title}
                price={f.price}
                persent={f.persent}
                description={f.description}
                icon={f.icon}
              />
            </Grid>
          );
        })}
      
    </Grid>
  );
};

export default index;
