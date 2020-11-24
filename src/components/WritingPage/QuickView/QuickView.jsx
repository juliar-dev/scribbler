import React, { useState } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import styles from '../writingStyles/quickView';

function QuickView(props) {
    const { classes, chapters, setChapters } = props;

    const [ title, setTitle ] = useState('');

    function handleChange(e) {
        const { value } = e.target;
        setTitle(value)
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.main}>
                    {/* <button style={{  display: chapters.length !== 0 && chapters[chapters.length - 1].length === 0 ? 'none' : 'inline' }} className={classes.chapterAdder} onClick={addChapter}>+</button> */}
                    <TextField className={classes.titleInput} id="title" label="Title" value={title} onChange={(e) => handleChange(e)} />
                    <ul className={classes.chapterList}>
                        { chapters.length > 0 ? chapters.map((chapter) => <Button key={`${chapter}`} >{chapter}</Button>) : <Button>Chapter One</Button> }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(QuickView);