import DataChart from "@/components/DataChart"
import { doughnutChartData } from "@/components/mockData"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

const TransactionBottomRow = () => {
    return (
        <Grid container>
            <Grid>
                <Paper>
                    <Typography>Transactions per user type</Typography>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper>
                    <Typography>Transactions per user type</Typography>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper>
                    <Typography>Transactions per user type</Typography>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper>
                    <Typography>Transactions per user type</Typography>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TransactionBottomRow