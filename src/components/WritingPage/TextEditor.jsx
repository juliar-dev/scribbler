import React from "react";
import { withStyles } from "@material-ui/core";
import styles from './writingStyles/textEditorStyles';

function TextEditor(props) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <h1>Hello</h1>
        </div>
    )
}

export default withStyles(styles)(TextEditor);