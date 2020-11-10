import React from 'react';
import { Link } from "react-router-dom";
import { withStyles, AppBar, Toolbar, Typography, Button  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import styles from '../styles/PageStyles';
import AboutPage from './AboutPage';

const LinkStyles = () => {
    return {textDecoration: 'none', color: "#FFFFFF"}
}

function HomePage(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <AppBar className={classes.appbar} position='fixed'>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.navItems}>
                            <Link style={LinkStyles()} to="/"><span className={classes.logo}><HomeIcon /></span></Link>
                            <Link style={LinkStyles()} to="/" onClick={window.scrollTo(0, 420)}><span>About</span></Link>
                            <Link style={LinkStyles()} to="/sign_in"><span>Log In</span></Link>
                        </div>
                    </Toolbar>
                </AppBar>
                <main className={classes.main}>
                    <div className={classes.banner}>
                        <Typography className={classes.title} variant="h1">Build a writing community</Typography>
                        <Typography className={classes.subtitle} variant="h2">
                            Developing your writing skills with a connection to professional writers
                        </Typography>
                        <Link style={LinkStyles()} to="/sign_up">
                            <Button className={classes.button} variant="contained">Begin</Button>
                        </Link>
                        <Typography className={classes.buttonFooter} variant="h3">
                            Already have an account?<Link to="/sign_in">Log in</Link>
                        </Typography>
                    </div>
                    <AboutPage />
                </main>
            </div>
        </div>
    )
};

export default withStyles(styles)(HomePage)