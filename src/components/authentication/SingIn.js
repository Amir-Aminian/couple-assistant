import InputForm from "../forms/InputForm";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

const SingIn = () => {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Sing In</h2>
            </Grid>
            <InputForm type="text" id="username" label="Username" />
            <InputForm type="password" id="password" label="Password" />
            <Grid item>
                <Link to={"/forgotPassword"}>Forgot Your Password?</Link>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" onClick={() => alert()}>Sing In</Button>
            </Grid>
        </Grid>
    );
}

export default SingIn;
