import React, { useRef, useContext } from 'react';
import { Link } from "react-router-dom";
import { withStyles, AppBar, Toolbar  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import styles from '../styles/PageStyles';
import { UserContext } from '../contexts/UserContext';

const LinkStyles = () => {
    return {textDecoration: 'none', color: "#FFFFFF"}
}

function HomePage(props) {
    const { user } = useContext(UserContext);

    const { classes, myRef } = props;
    
    function executeScroll() {
        myRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <AppBar className={classes.appbar} position='fixed'>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.navItems}>
                            <Link style={LinkStyles()} to="/"><span className={classes.logo}><HomeIcon /></span></Link>
                            <Link style={LinkStyles()} to="/" onClick={executeScroll}><span>About</span></Link>
                            <Link style={LinkStyles()} to="/sign_in"><span>Log In</span></Link>
                            {!user &&
                                <>
                                    <Link style={LinkStyles()} to="/read_feed"><span>Explore</span></Link>
                                    <Link style={LinkStyles()} to="/write"><span>Write</span></Link>
                                    <Link style={LinkStyles()} to="/account"><span><AccountCircleOutlinedIcon />{user && user.username}</span></Link>
                                </>
                            }
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
};

export default withStyles(styles)(HomePage)