import { Select, MenuItem, FormControl, Grid, InputLabel } from "@mui/material";

const DropDownForm = ({ id, label, options }) => {
    return (
        <Grid item>
            <FormControl size="small">
                <InputLabel htmlFor={id+"Label"}>{label}</InputLabel>
                <Select id={id} labelId={id+"Label"}>
                    {options.map((option) => (
                        <MenuItem key={option + id} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}

export default DropDownForm;
