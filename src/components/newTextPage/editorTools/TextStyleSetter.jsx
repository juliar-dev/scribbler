import React from "react";
import { RichUtils } from 'draft-js';

import { Button, withStyles } from "@material-ui/core";
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
        <div className={classes.textStyleSetter}>
            <Button id='underline' onMouseDown={(e) => onRichStyleClick(e)}>
                <FormatUnderlinedIcon />
            </Button>
            <Button id='bold' onMouseDown={(e) => onRichStyleClick(e)}>
                <FormatBoldIcon />
            </Button>
            <Button id='italic' onMouseDown={(e) => onRichStyleClick(e)}>
                <FormatItalicIcon />
            </Button>
        </div>
    )
}

export default withStyles(styles)(TextStyleSetter);