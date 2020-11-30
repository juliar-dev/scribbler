import React from 'react'
import { RichUtils } from 'draft-js';

import styles from '../newTextPage-Styles/textEditorStyles';
import { withStyles } from "@material-ui/core";

import HighlightIcon from '@material-ui/icons/Highlight';


function Highlighter(props) {
    const { classes, editorState, onChange } = props;

    function onHighlightTextClick(e) {
        e.preventDefault();
        onChange(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
    }

    return (
        <div className={classes.highlighter}>
            <button onMouseDown={(e) => onHighlightTextClick(e)}><HighlightIcon /></button>
        </div>
    )
}

export default withStyles(styles)(Highlighter);