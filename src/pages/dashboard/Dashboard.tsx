import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={4}>
                <DataRibbon />
                <TransactionsPerDay />
            </Grid>
            <TransactionBottomRow />
        </Box>
    )
}
export default Dashboard;