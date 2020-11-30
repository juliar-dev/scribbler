import React from "react";
import { RichUtils } from 'draft-js';

import { withStyles } from "@material-ui/core";
import styles from '../newTextPage-Styles/textEditorStyles';

function TextStyleSetter(props) {
    const { classes, editorState, setEditorState } = props;

    function onChange(editorState) {
        setEditorState(editorState);
    }

    function onRichStyleClick(e) {
        const { id } = e.target;
        e.preventDefault();
        let style;

        switch(id) {
            case 'italic' :
            style = 'ITALIC';
            break;
            case 'bold' : 
            style = 'BOLD';
            break;
            case 'underline' :
            style = 'UNDERLINE';
            break;
            default : 
            return;
        }

        onChange(RichUtils.toggleInlineStyle(editorState, style));
    }

    return (
        <div className={classes.container}>
            <button id='underline' onMouseDown={(e) => onRichStyleClick(e)}>
                <em>U</em>
            </button>
            <button id='bold' onMouseDown={(e) => onRichStyleClick(e)}>
                <em>B</em>
            </button>
            <button id='italic' onMouseDown={(e) => onRichStyleClick(e)}>
                <em>I</em>
            </button>
        </div>
    )
}

export default withStyles(styles)(TextStyleSetter);