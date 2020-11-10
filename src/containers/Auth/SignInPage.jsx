import React, { useState } from 'react';
import { 
    Paper, 
    Avatar, 
    withStyles, 
    Typography, 
    FormControl, 
    InputLabel, 
    Input, 
    FormControlLabel, 
    Button, 
} from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

import styles from '../../styles/FormStyles'
import { Link } from 'react-router-dom';

function SignInPage(props) {
    const { classes } = props;

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;

        name === "username" ? setUsername(value) : setPassword(value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        window.location.href = "/";
    }

    return (
        <div className={classes.container}>
            <main className={classes.main}>
                <Link to="/"><HomeIcon></HomeIcon></Link>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography variant="h5">Scribbler</Typography>
                    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" name="username" value={username} onChange={(e) => {handleChange(e)}} autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" type="password" value={password} onChange={(e) => {handleChange(e)}}></Input>
                        </FormControl>
                        <FormControlLabel control={<CheckBox color="primary"/>} label="Remember Me" />
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>Sign In</Button>
                        <span className={classes.footer}>Don't have an account? <Link to="/sign_up" className={classes.link}>Create one</Link></span>
                    </form>
                </Paper>
            </main>
        </div>
    )
}

export default withStyles(styles)(SignInPage)