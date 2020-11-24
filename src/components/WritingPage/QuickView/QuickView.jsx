import React, { useState } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import styles from '../writingStyles/quickView';

function QuickView(props) {
    const { classes, chapters, setSelectedChapter, title } = props;

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.main}>
                    {/* <button style={{  display: chapters.length !== 0 && chapters[chapters.length - 1].length === 0 ? 'none' : 'inline' }} className={classes.chapterAdder} onClick={addChapter}>+</button> */}
                    { title !== '' ? <p>{title}</p> : <p>Title</p> }
                    <ul className={classes.chapterList}>
                        { 
                            chapters.length > 0 ? chapters.map((chapter) => <Button key={`${chapter.title}`} onClick={() => setSelectedChapter(chapter)} >{chapter.title}</Button>) 
                            : 
                            <Button onClick={() => setSelectedChapter({title: '', text: ''})}>Chapter One</Button> 
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(QuickView);