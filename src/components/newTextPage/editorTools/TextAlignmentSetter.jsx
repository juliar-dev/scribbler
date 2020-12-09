import React from 'react';

import styles from '../newTextPage-Styles/textEditorStyles';
import { Button, withStyles } from "@material-ui/core";

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

function TextAlignmentSetter(props) {
    const { classes, setEditorAlignmentClass, paragraphs } = props;

    function onClickAlignOption(e, value) {
        e.preventDefault();
        // console.log(paragraphs[0].innerText)
        // paragraphs[0].innerText.split('').map(letter => {
        //     console.log(letter)
        //     letter.classList.add('newClass')
        // });
        // for (let i = 0; i < paragraphs.length; i++) {
        //     const paragraph = paragraphs.item(i);
        //     setEditorAlignmentClass(paragraph);
        //     // if (paragraph) {
        //     //     const firstItem = paragraph.querySelectorAll('*').item(0);
        //     //     paragraph.style.textAlign = firstItem.style.textAlign;
        //     // }
        // }
        setEditorAlignmentClass(value);
    }

    return (
        <div className={classes.textAlignmentSetter}>
            <Button onMouseDown={(e) => onClickAlignOption(e, classes.left)} ><FormatAlignLeftIcon /></Button>
            <Button onMouseDown={(e) => onClickAlignOption(e, classes.center)} ><FormatAlignCenterIcon /></Button>
            <Button onMouseDown={(e) => onClickAlignOption(e, classes.right)} ><FormatAlignRightIcon /></Button>
            <Button onMouseDown={(e) => onClickAlignOption(e, classes.justify)} ><FormatAlignJustifyIcon /></Button>
        </div>
    )
}

export default withStyles(styles)(TextAlignmentSetter);

//TODO: At the moment, using these button sets the whole text to align, we need to be able to align only specific sections of the text. 