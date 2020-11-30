import React from 'react'

import styles from '../newTextPage-Styles/textEditorStyles';
import { withStyles } from "@material-ui/core";

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';


function UndoRedoSetter(props) {
    const { classes } = props;

    return (
        <div className={classes.undoRedoSetter}>
            <div>
                <button><UndoIcon /></button>
                <button><RedoIcon /></button>
            </div>
        </div>
    )
}

export default withStyles(styles)(UndoRedoSetter);