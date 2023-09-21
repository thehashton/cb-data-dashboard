import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { IconButton, Paper, Tooltip, Typography } from "@mui/material"

export type DataCardProps = {
    title: string
    value: string
    description: string
}

const DataCard = (props: DataCardProps) => {
    const { title = 'No Title', value = '0', description = 'No Description' } = props

    return (
        <Paper>
            <div>
                <Typography variant="h6" color={'lightslategrey'}>
                    {title}
                </Typography>
                <Tooltip title={
                    <Typography>
                        {`${description} which is ${value}`}
                    </Typography>
                }>
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <Typography variant="h4">{value}</Typography>
        </Paper>
    )
}

export default DataCard