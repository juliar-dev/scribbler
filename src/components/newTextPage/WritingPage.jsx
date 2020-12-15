import React, { useState } from "react";
import { withStyles } from '@material-ui/core';

import styles from './newTextPage-Styles/writingStyles';
import Sidebar from "./Sidebar";
import QuickView from './QuickView';
import TextEditor from "./TextEditor";

function WritingPage(props) {
    const { classes } = props;

    const [ selectedPage, setSelectedPage ] = useState("new_text");
    const [ title, setTitle ] = useState('')
    const [ selectedChapter, setSelectedChapter ] = useState(null);

    const [ chapters, setChapters ] = useState([]);

    console.log(chapters);

    function saveAll(chapterTitles, chapterContents) {
        if (chapterTitles) {
            let savedChapters = chapterTitles.map(chapterTitle => {
                return {title: chapterTitle, text: ''};
            })
            setChapters(savedChapters);
        }
    }


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
                                <QuickView chapters={chapters} 
                                            setChapters={setChapters} 
                                            selectedChapter={selectedChapter} 
                                            setSelectedChapter={setSelectedChapter} 
                                            title={title} setTitle={setTitle} 
                                            saveAll={saveAll} />
                            </div>  
                            <div className={classes.editor}>
                                <TextEditor selectedChapter={selectedChapter} 
                                            setSelectedChapter={setSelectedChapter} 
                                            chapters={chapters} 
                                            setChapters={setChapters}
                                            saveAll={saveAll} />
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