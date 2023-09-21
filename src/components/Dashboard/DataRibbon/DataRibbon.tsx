import Grid from "@mui/material/Grid"
import DataCard from "../DataCard"

const DataRibbon = () => {
    return (
        <Grid container gap={2}>
            <Grid>
                <DataCard
                    title={'Total Sales'}
                    value={'462'}
                    description={'The totals of all DataSoft products in the current financial year.'}
                />
            </Grid>
            <Grid>
                <DataCard
                    title={'Total Value'}
                    value={'$25,732.53'}
                    description={'The total sales of the current financial year.'}
                />
            </Grid>
            <Grid>
                <DataCard
                    title={'Avg. Order Value'}
                    value={'$159.30'}
                    description={'The average order value for all sales this current financial year.'}
                />
            </Grid>
            <Grid>
                <DataCard
                    title={'Conversion Rate'}
                    value={'0.61%'}
                    description={'How many pitches become sales.'}
                />
            </Grid>
        </Grid>
    )
}

export default DataRibbon