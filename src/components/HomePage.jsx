import React from 'react';
import { Link } from "react-router-dom";
import { withStyles, AppBar, Toolbar, Typography  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';


import styles from '../styles/PageStyles'

const LinkStyles = () => {
    return {textDecoration: 'none', color: "#FFFFFF"}
}

function HomePage(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <AppBar className={classes.appbar} position='fixed'>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.navItems}>
                            <Link style={LinkStyles()}><span className={classes.logo}><HomeIcon /></span></Link>
                            <Link style={LinkStyles()}><span flexGrow={1}>About</span></Link>
                            <Link style={LinkStyles()} to="/sign_in"><span className={classes.logInItem}>Log In</span></Link>
                        </div>
                    </Toolbar>
                </AppBar>
                <main>
                    <Typography variant="h1" component="h2">h1. Heading</Typography>
                </main>
            </div>
        </div>
    )
};

export default withStyles(styles)(HomePage)