import DataChart from "@/components/DataChart"
import { lineChartData } from "@/components/mockData"
import { Card, Grid, Paper, Typography, useTheme } from "@mui/material"

export type TransactionCardType = {
    title: string
    value: string
    changeValue: string
}

const TransactionsPerDay = () => {
    const theme = useTheme()

    return (
        <Grid container gap={2}>
            <Paper>
                <div>
                    <Typography>TransActions per day</Typography>
                    <DataChart type={'line'} data={lineChartData} />
                </div>
                <div>
                    <Card variant="outlined">
                        <div>
                            <Typography>Total Products</Typography>
                        </div>
                        <div>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>
                                428.7%
                            </Typography>
                        </div>
                    </Card>
                    <Card variant="outlined">
                        <div>
                            <Typography>Buy-to-detail</Typography>
                        </div>
                        <div>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>
                                428.7%
                            </Typography>
                        </div>
                    </Card>
                    <Card variant="outlined">
                        <div>
                            <Typography>Total Products</Typography>
                        </div>
                        <div>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>
                                428.7%
                            </Typography>
                        </div>
                    </Card>
                </div>
            </Paper>
        </Grid>
    )
}

export default TransactionsPerDay