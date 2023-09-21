import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'

const Data = () => {
    const { data } = useDemoData({
        dataSet: "Commodity",
        rowLength: 500,
        maxColumns: 15,
    })

    return (
        <Box style={{ height: "900px", width: "100%" }}>
            <Typography variant='h3' component='h1'>Data</Typography>
            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aspernatur facilis laborum alias aliquid. Dolorum accusantium hic eveniet. Modi quidem provident ea, voluptatem tempora corporis architecto ipsa fugiat voluptate harum.</Typography>
            <DataGrid slots={{
                loadingOverlay: LinearProgress
            }} loading={!data}
                {...data} />
        </Box>
    )
}

export default Data;