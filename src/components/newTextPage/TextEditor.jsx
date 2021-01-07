import React, { useState, useRef, useEffect } from "react";
import { Editor, EditorState, ContentState, RichUtils, convertToRaw } from 'draft-js';

import { Button, Typography, withStyles } from "@material-ui/core";
import styles from './newTextPage-Styles/textEditorStyles';
import createStyles from 'draft-js-custom-styles';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';

import UndoRedoSetter from './editorTools/UndoRedoSetter';
import FontSizeSetter from './editorTools/FontSizeSetter';
import TextStyleSetter from './editorTools/TextStyleSetter';
import Highlighter from './editorTools/Highlighter';
import BulletPointSetter from './editorTools/BulletPointSetter';
import TextAlignmentSetter from './editorTools/TextAlignmentSetter';

function TextEditor(props) {
    const { classes, selectedChapter, setSelectedChapter, setStory, story } = props;

    const paragraphs = document.querySelectorAll(".public-DraftStyleDefault-ltr");

    const textInput = useRef();

    const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
    const [ editorAlignmentClass, setEditorAlignmentClass ] = useState(classes.left);

    const {styles, customStyleFn} = createStyles(['font-size']);

    const styleMap = {
        'HIGHLIGHT': {
            'backgroundColor': '#faed27',
        }
    };

    useEffect(() => {

        let newEditorState = EditorState.push(editorState, ContentState.createFromText(''));
        setEditorState(newEditorState);
        const savedText = retrieveEditorContent();
        newEditorState = EditorState.push(editorState, ContentState.createFromText(savedText ? savedText : ''));
        setEditorState(newEditorState);

        console.log(story);

    }, [selectedChapter])

    function onChange(editorState) {
        const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
        const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
        saveEditorContent(value);
        setEditorState(editorState);
    }

    function saveEditorContent(data) {
        localStorage.setItem(`chapter ${selectedChapter}: `, JSON.stringify(data));
        const editedStory = { ...story };
        const chapterToEdit =  editedStory.chapters.find(chapter => chapter.title === selectedChapter);
        chapterToEdit.content = data;
        setStory(editedStory);
    }

    function retrieveEditorContent() {
        const savedData = localStorage.getItem(`chapter ${selectedChapter}: `);
        return savedData ? JSON.parse(savedData) : null;
        // const editedStory = { ...story };
        // const chapterToRetrieve = editedStory.chapters.find(chapter => chapter.title = selectedChapter);
        // return chapterToRetrieve ? chapterToRetrieve.content : null;
    }

    function handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    return (
        <div className={classes.container}>
            {
                selectedChapter && selectedChapter !== 0 && selectedChapter !== '' ? 
                    <div className={classes.textEditor} >
                        <div className={classes.editorTools}>
                            <UndoRedoSetter />
                            <FontSizeSetter editorState={editorState} setEditorState={setEditorState} styles={styles}/>
                            <TextStyleSetter editorState={editorState} onChange={onChange}/>
                            <Highlighter editorState={editorState} onChange={onChange} styles={styles}/>
                            <BulletPointSetter editorState={editorState} onChange={onChange} styles={styles} />
                            <TextAlignmentSetter setEditorAlignmentClass={setEditorAlignmentClass} paragraphs={paragraphs}/>
                            <Button><AttachFileIcon /></Button>
                            <Button><ImageIcon /></Button>
                            <Button><DeleteIcon /></Button>
                        </div>
                        <div className={classes.textField}>
                                <Typography className={classes.title} variant="h2">{selectedChapter}</Typography>
                            <div className={classes.editor} onClick={() => {textInput.current.focus()}} onBlur={() => setSelectedChapter(null)}>
                                <div className={editorAlignmentClass}>
                                    <Editor 
                                        editorState={editorState} 
                                        onChange={onChange} 
                                        handleKeyCommand={handleKeyCommand} 
                                        customStyleFn={customStyleFn} 
                                        customStyleMap={styleMap}
                                        ref={textInput}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> 
                : 
                    <div>
                        <Typography className={classes.prompt} variant="h3">Add a chapter</Typography>
                    </div>
            }
        </div>
    )
}

export default withStyles(styles)(TextEditor);


//TODO: Need to sort styling for text editor page.