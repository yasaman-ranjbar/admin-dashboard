import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Chip,
} from "@mui/material";
import { transactionData } from "../../data";

const Index = () => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          New users have joined
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Grid container alignItems={"center"} spacing={2}>
                      <Grid item>
                        <Avatar src={row.avatar} />
                      </Grid>
                      <Grid item>{row.name}</Grid>
                    </Grid>
                  </TableCell>

                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={row.status}
                      color={
                        row.status === "Aproved"
                          ? "success"
                          : row.status === "Rejected"
                          ? "error"
                          : "info"
                      }
                              size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Index;
