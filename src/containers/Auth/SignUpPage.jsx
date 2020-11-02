import React from 'react';
import { 
    Paper, 
    Avatar, 
    withStyles, 
    Typography, 
    FormControlLabel, 
    Button, 
    TextField,
    FormLabel,
    RadioGroup,
    Radio
} from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import HomeIcon from '@material-ui/icons/Home';

import styles from '../../styles/FormStyles'
import { Link } from 'react-router-dom';
import { AddPhotoAlternate } from '@material-ui/icons';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class SignUpPage extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        description: '',
        topic: 'fiction',
        goals: '',
        level: 'beginner'
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isUsername', (value) => {
            const usernameRegex = /^[a-zA-Z0-9]+$/;
            if (!value.match(usernameRegex)) {
                return false;
            }
            return true;
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        window.location.href = "/dashboard";
    }

    render() {
        const { classes } = this.props;
        const { username, email, password, description, topic, goals, level } = this.state;

        return (
            <div className={classes.container}>
                <main className={classes.main}>
                    <Link to="/"><HomeIcon></HomeIcon></Link>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AddPhotoAlternate />
                        </Avatar>
                        <Typography variant="h5">Scribbler</Typography>
                        <ValidatorForm className={classes.form} onSubmit={(e) => this.handleSubmit(e)}>
                            <TextValidator id="username" name="username" label="Username" value={username} onChange={(e) => this.handleChange(e)} margin="normal" 
                                            required fullWidth autoFocus validators={['isUsername']} 
                                            errorMessages={['Invalid. Username must contain chars(Aa-Zz) and digits(0-9) only.']} />
                            <TextValidator id="email" name="email" label="Email" value={email} onChange={(e) => this.handleChange(e)} margin="normal" 
                                            required fullWidth validators={['isEmail']} errorMessages={['Invalid email address']}/>
                            <TextValidator id="password" name="password" label="Password" type="password" value={password} onChange={(e) => this.handleChange(e)} margin="normal" 
                                            required fullWidth />
                            <TextField margin="normal" required fullWidth multiline label="Your personal description" variant="outlined" name="description" 
                                        value={description} onChange={(e) => this.handleChange(e)} />
                                <FormLabel>Topic</FormLabel>
                            <RadioGroup className={classes.radioContainer} aria-label="topic" id="topic" name="topic" value={topic} onChange={(e) => this.handleChange(e)} 
                                            required>
                                <FormControlLabel value="fiction" control={<Radio />} label="Fiction/Story" />
                                <FormControlLabel value="non_fiction" control={<Radio />} label="Non-Fiction" />
                                <FormControlLabel value="blog" control={<Radio />} label="Blog" />
                            </RadioGroup>
                            <TextField margin="normal" required fullWidth multiline label="Your Goals" variant="outlined" name="goals" value={goals} 
                                        onChange={(e) => this.handleChange(e)} />
                            <FormLabel>Level</FormLabel>
                            <RadioGroup className={classes.radio} aria-label="level" name="level" value={level} onChange={(e) => this.handleChange(e)} required>
                                <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
                                <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
                                <FormControlLabel value="professional" control={<Radio />} label="Pro" />
                            </RadioGroup>
                            <FormControlLabel control={<CheckBox color="primary"/>} label="remember me" />
                            <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>Sign Up</Button>
                            <span className={classes.footer}>Already have an account? <Link to="/sign_in" className={classes.link}>Sign In</Link></span>
                        </ValidatorForm>
                    </Paper>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(SignUpPage)