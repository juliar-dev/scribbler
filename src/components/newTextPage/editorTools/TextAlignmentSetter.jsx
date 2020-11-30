import React, {useState} from 'react'

import styles from '../newTextPage-Styles/textEditorStyles';
import { withStyles } from "@material-ui/core";

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

function TextAlignmentSetter(props) {
    const { classes, editorState, onChange } = props;


    return (
        <div className={classes.textAlignmentSetter}>
            <button><FormatAlignLeftIcon /></button>
            <button><FormatAlignCenterIcon /></button>
            <button><FormatAlignRightIcon /></button>
            <button><FormatAlignJustifyIcon /></button>
        </div>
    )
}

export default withStyles(styles)(TextAlignmentSetter);