import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from '../../contexts/UserContext';
import { Button, withStyles } from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';

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
    const [ saved, setSaved ] = useState(false);

    const prevStateRef = useRef();

    useEffect(() => {
        prevStateRef.current !== story ? setSaved(false) : setSaved(true);
        if (user) {
            const editedStory = { ...story };
            editedStory.author = user.username;
            setStory(editedStory);
        }
    }, []);


    const handleSave = () => {
        prevStateRef.current = story;
        setSaved(true);
        localStorage.clear();
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.dashboard}>
                    <div className={classes.saveButton}>
                        <span>{saved ? 'Saved' : 'Unsaved Changes'}</span>
                        <Button onClick={() => handleSave()}><SaveIcon /></Button>
                    </div>
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