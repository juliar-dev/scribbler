import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';

import { Button, FormControl, Input, Typography, withStyles } from "@material-ui/core";
import styles from './newTextPage-Styles/textEditorStyles';
import createStyles from 'draft-js-custom-styles';

import UndoRedoSetter from './editorTools/UndoRedoSetter';
import FontSizeSetter from './editorTools/FontSizeSetter';
import TextStyleSetter from './editorTools/TextStyleSetter';
import Highlighter from './editorTools/Highlighter';
import BulletPointSetter from './editorTools/BulletPointSetter';
import TextAlignmentSetter from './editorTools/TextAlignmentSetter';

function TextEditor(props) {
    const { classes, selectedChapter, setSelectedChapter, title, setTitle, chapters, setChapters } = props;

    const [ newChapterTitle, setNewChapterTitle ] = useState('');
    const [ editorState, setEditorState ] = useState(EditorState.createEmpty());

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
                selectedChapter && selectedChapter !== 0 && selectedChapter.title !== '' ? 
                    <div className={classes.textEditor} >
                        <div className={classes.editorTools}>
                            <Button disabled={!chapters.every(chapter => chapter.title !== '')} onClick={addNewChapter}>+</Button>
                            <UndoRedoSetter />
                            <FontSizeSetter editorState={editorState} setEditorState={setEditorState} styles={styles}/>
                            <TextStyleSetter editorState={editorState} onChange={onChange}/>
                            <Highlighter editorState={editorState} onChange={onChange} styles={styles}/>
                            <BulletPointSetter editorState={editorState} onChange={onChange} styles={styles} />
                            <TextAlignmentSetter editorState={editorState} onChange={onChange} />
                        </div>
                        <div className={classes.textField}>
                            <FormControl onSubmit={handleBlur}>
                                <Typography variant="h2" >{selectedChapter.title}</Typography>
                                {/* <Input
                                    className={classes.chapterTitle} 
                                    placeholder={selectedChapter.title} 
                                    value={selectedChapter && selectedChapter.title !== '' ? selectedChapter.title : newChapterTitle} 
                                    onChange={(e) => setNewChapterTitle(e.target.value)} 
                                    onBlur={(e) => handleBlur(e)}
                                    disabled={selectedChapter && selectedChapter.title.length > 0} /> */}                            </FormControl>
                            <div className={classes.editor}>
                                <Editor 
                                    editorState={editorState} 
                                    onChange={onChange} 
                                    handleKeyCommand={handleKeyCommand} 
                                    customStyleFn={customStyleFn} 
                                    customStyleMap={styleMap} 
                                />
                            </div>
                        </div>
                    </div> 
                : 
                    <div>
                        <FormControl onSubmit={handleBlur}>
                            <Input 
                                className={classes.title} 
                                placeholder='Title' 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required
                                />
                            {'\n'}
                            <Input 
                                className={classes.chapterTitle} 
                                value={selectedChapter ? selectedChapter.title : newChapterTitle} 
                                onChange={(e) => setNewChapterTitle(e.target.value)} 
                                onBlur={handleBlur} 
                                onSubmit={handleBlur}
                                placeholder='Chapter One' 
                                readOnly={selectedChapter && selectedChapter.title.length > 0} 
                                required
                                />
                        </FormControl>
                    </div>
            }
        </div>
    )
}

export default withStyles(styles)(TextEditor);