import React, { useState, useRef } from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';

import { Button, FormControl, Input, Typography, withStyles } from "@material-ui/core";
import styles from './newTextPage-Styles/textEditorStyles';
import createStyles from 'draft-js-custom-styles';

import AddIcon from '@material-ui/icons/Add';
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
    const { classes, selectedChapter, setSelectedChapter, title, setTitle, chapters, setChapters } = props;

    const paragraphs = document.querySelectorAll(".public-DraftStyleDefault-ltr");

    const textInput = useRef();

    const [ newChapterTitle, setNewChapterTitle ] = useState('');
    const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
    const [ editorAlignmentClass, setEditorAlignmentClass ] = useState(classes.left);

    const {styles, customStyleFn} = createStyles(['font-size']);

    const styleMap = {
        'HIGHLIGHT': {
            'backgroundColor': '#faed27',
        }
    };

    function handleBlur(e) {
        const { value } = e.target;

        let newChapter = {...selectedChapter};
        newChapter.title = newChapterTitle;
        setSelectedChapter(newChapter);



        if (chapters.length === 0) {
            setChapters(chapters => [...chapters, newChapter]);
        } else {
            let newChapters = [...chapters];
            newChapters.map(chapter => {
                chapter.title === '' ? chapter.title = value : chapter.title = chapter.title;
            })
            setChapters(newChapters);
        }

        setNewChapterTitle('');
    }

    function addNewChapter() {
        setChapters(chapters => [...chapters, {title: '', text: ''}]);
        setSelectedChapter(selectedChapter[selectedChapter.length -1]);
    }

    function onChange(editorState) {
        setEditorState(editorState);
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
                            <Button disabled={!chapters.every(chapter => chapter.title !== '')} onClick={addNewChapter}>
                                <AddIcon />
                            </Button>
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
                            <FormControl onSubmit={handleBlur}>
                                <Typography className={classes.title} variant="h2">{selectedChapter}</Typography>
                            </FormControl>
                            <div className={classes.editor} onClick={() => {textInput.current.focus()}}>
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