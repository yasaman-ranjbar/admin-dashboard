import { Card, CardContent, Typography } from "@material-ui/core";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const index = ({ title, data , grid }) => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <ResponsiveContainer width="100%" aspect={4}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis />
            <Line
              type={"monotone"}
              dataKey={"sale"}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type={"monotone"} dataKey={"discount"} stroke="#82ca9d" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray={5} />}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default index;
