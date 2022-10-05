import { Button, Grid } from "@mui/material";
import InputForm from "../forms/InputForm";

const ForgotPassword = () => {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Forgot Your Password?</h2>
            </Grid>
            <InputForm type="text" id="firsQuestion" label="Answer the first question" />
            <InputForm type="text" id="secondQuestion" label="Answer the second question" />
            <InputForm type="text" id="thirdQuestion" label="Answer the third question" />
            <Grid item>
                <Button variant="contained" size="small" onClick={() => alert()}>Submit</Button>
            </Grid>
        </Grid>
    );
}

export default ForgotPassword;