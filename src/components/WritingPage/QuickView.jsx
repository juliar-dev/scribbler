import React from "react";
import { withStyles } from "@material-ui/core";
import styles from './writingStyles/quickView';

function QuickView(props) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <h1>Hello</h1>
        </div>
    )
}

export default withStyles(styles)(QuickView);