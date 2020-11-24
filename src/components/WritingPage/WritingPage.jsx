import React, { useState } from "react";
import { withStyles } from '@material-ui/core';
// import PublishIcon from '@material-ui/icons/Publish';

import styles from './writingStyles/writingStyles';
import Sidebar from "./Sidebar";
import QuickView from './QuickView/QuickView';
import TextEditor from "./TextEditor";

function WritingPage(props) {
    const { classes } = props;

    const [ selectedPage, setSelectedPage ] = useState(null);
    const [ title, setTitle ] = useState('')
    const [ selectedChapter, setSelectedChapter ] = useState(null);

    const [ chapters, setChapters ] = useState([]);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.dashboard}>
                    <div className={classes.sidebar}>
                        <Sidebar setSelectedPage={setSelectedPage} />
                    </div>
                    {selectedPage === 'new_text' && 
                        <>
                            <div className={classes.quickView}>
                                <QuickView chapters={chapters} selectedChapter={selectedChapter} setSelectedChapter={setSelectedChapter} title={title} />
                            </div>  
                            <div className={classes.editor}>
                                <TextEditor selectedChapter={selectedChapter} setSelectedChapter={setSelectedChapter} title={title} setTitle={setTitle} chapters={chapters} setChapters={setChapters} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(WritingPage);

//TODO: Create a choose an action message/ graphic for when no sidebar option has been selected.