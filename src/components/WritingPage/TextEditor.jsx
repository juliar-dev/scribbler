import React, { useState } from "react";
import { TextField, withStyles } from "@material-ui/core";
import styles from './writingStyles/textEditorStyles';

function TextEditor(props) {
    const { classes, selectedChapter, setSelectedChapter, title, setTitle, chapters, setChapters } = props;

    const [ newChapterTitle, setNewChapterTitle ] = useState('');

    function handleBlur() {
        let newChapter = {...selectedChapter};
        newChapter.title = newChapterTitle;
        setSelectedChapter(newChapter);

        setChapters(chapters => [...chapters, newChapter]);
    }

    return (
        <div className={classes.container}>
            {
                selectedChapter && selectedChapter !== 0 ? 
                    <div>
                        <TextField className={classes.title} placeholder={title} value={title} />
                        <TextField className={classes.chapterTitle} placeholder={selectedChapter.title} value={selectedChapter.title} />
                    </div> 
                : 
                    <div>
                        <TextField className={classes.title} placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        {'\n'}
                        <TextField className={classes.chapterTitle} value={selectedChapter ? selectedChapter.title : newChapterTitle} onChange={(e) => setNewChapterTitle(e.target.value)} onBlur={handleBlur} placeholder='Chapter One' />
                    </div>
            }
        </div>
    )
}

export default withStyles(styles)(TextEditor);