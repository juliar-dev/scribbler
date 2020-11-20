import React, { useState } from "react";
import { withStyles } from '@material-ui/core';
// import PublishIcon from '@material-ui/icons/Publish';

import styles from './writingStyles';
import Sidebar from "./Sidebar";

function WritingPage(props) {
    const { classes } = props;

    const [ selected, setSelected ] = useState(null);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.dashboard}>
                    <div className={classes.sidebar}>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(WritingPage);