import React, { useContext, useState } from "react";
import { UserContext } from '../../contexts/UserContext';
import { withStyles } from '@material-ui/core';

import styles from './newTextPage-Styles/writingStyles';
import Sidebar from "./Sidebar";
import TextDetailsEditor from './TextDetailsEditor';
import TextEditor from "./TextEditor";

function WritingPage(props) {
    const { user } = useContext(UserContext);
    const { classes } = props;
    const [ selectedPage, setSelectedPage ] = useState("new_text");
    const [ selectedChapter, setSelectedChapter ] = useState(null);
    const [ story, setStory ] = useState({
        title: '',
        blurb: '',
        genres: [],
        chapters: [],
        author: ''
    });

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
                                <TextDetailsEditor story={story} setStory={setStory} setSelectedChapter={setSelectedChapter} />
                            </div>
                            <div className={classes.editor}>
                                <TextEditor selectedChapter={selectedChapter} 
                                            setSelectedChapter={setSelectedChapter} 
                                            setStory={setStory}
                                            story={story}
                                            />
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