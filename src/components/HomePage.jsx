import React, { useRef, useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withStyles, Typography, Button  } from '@material-ui/core';

import styles from '../styles/PageStyles';
import AboutPage from './AboutPage';
import { UserContext } from '../contexts/UserContext';
import Nav from './Nav';

const LinkStyles = () => {
    return {textDecoration: 'none', color: "#FFFFFF"}
}

function HomePage(props) {
    const { user } = useContext(UserContext);

    const { classes } = props;
    const myRef = useRef(null)

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Nav myRef={myRef}/>
                <main className={classes.main}>
                    {user &&
                    <>
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
                        <div ref={myRef}>
                            <AboutPage />
                        </div>
                    </>
                    }
                    <div className={classes.grid}>
                        <div className={classes.item1}>Explore</div>
                        <Link to="/write"><div className={classes.item2}>Write</div></Link>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default withStyles(styles)(HomePage)

//TODO: Fix css for home page(About Section!), change nav link color on scroll to other colors;
//TODO: Begin re-creating dashoard after user signed in, you will need to look at context.js for state management;
//TODO: Backend for user log in/ sign up, if they have a tocken sign them in, (store in local storage?);
