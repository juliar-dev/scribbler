import React from 'react'

import styles from '../newTextPage-Styles/textEditorStyles';
import { Button, withStyles } from "@material-ui/core";

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';


function UndoRedoSetter(props) {
    const { classes } = props;

    return (
        <div className={classes.undoRedoSetter}>
            <div>
                <Button><UndoIcon /></Button>
                <Button><RedoIcon /></Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(UndoRedoSetter);