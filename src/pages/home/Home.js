import Features from "../../components/Features";
import Chart from '../../components/Chart/index'
import NewUserWidget from "../../components/NewUserWidget/index";
import LatestTransActions from "../../components/LatestTransActions/index";

import { xAxisData } from "../../data";
import { Grid } from "@material-ui/core";
const Home = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={12}>
        <Features />
      </Grid>
      <Grid item md={12}>
        <Chart grid title={"Analytics"} data={xAxisData} />
      </Grid>
      <Grid item md={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3} md={4}>
            <NewUserWidget />
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <LatestTransActions />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
