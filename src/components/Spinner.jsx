import { Box , CircularProgress} from "@mui/material";
import { number, oneOfType, string } from "prop-types";

const Spinner = ({ color = "primary", size = 40, height = "50vh" }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: { height },
        }}>
            <CircularProgress color={color} size={size} sx={{ alignSelf: "center" }} />
        </Box>
    )
}

Spinner.propTypes = {
    color: string,
    size: number,
    height: oneOfType([string, number])
}

export default Spinner;