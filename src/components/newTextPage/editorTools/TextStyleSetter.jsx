import React from "react";
import { RichUtils } from 'draft-js';

import { withStyles } from "@material-ui/core";
import styles from '../newTextPage-Styles/textEditorStyles';

import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';

function TextStyleSetter(props) {
    const { classes, editorState, onChange } = props;

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
                <em><FormatUnderlinedIcon /></em>
            </button>
            <button id='bold' onMouseDown={(e) => onRichStyleClick(e)}>
                <em><FormatBoldIcon /></em>
            </button>
            <button id='italic' onMouseDown={(e) => onRichStyleClick(e)}>
                <em><FormatItalicIcon /></em>
            </button>
        </div>
    )
}

export default withStyles(styles)(TextStyleSetter);