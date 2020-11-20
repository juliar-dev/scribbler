import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./writingStyles/sidebarStyles";

import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import NoteIcon from '@material-ui/icons/Note';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function Sidebar(props) {
    const { classes, setSelectedPage } = props;

    return (
        <div className={classes.container} >
            <div className={classes.sidebarContainer} >
                <div id={classes.searchbar} className={classes.sidebarChild}>
                    <div className={classes.search}>
                        <SearchIcon className={classes.searchIcon} />
                        <input className={classes.searchBar} type="search"/>
                    </div>
                </div>
                <div id={classes.upload} className={classes.sidebarChild}>
                    <button><PublishIcon className={classes.buttonIcon} /> Upload</button>
                </div>
                <div id={classes.write} className={classes.sidebarChild}>
                    <button id="new_text" onClick={(e) => setSelectedPage(e.target.id)}><AddIcon className={classes.buttonIcon} /> New Text</button>
                </div>
                <div id={classes.storyFolder} className={classes.sidebarChild}>
                    <p><LocalLibraryIcon className={classes.icon} />Stories</p>
                </div>
                <div id={classes.notebook} className={classes.sidebarChild}>
                    <p><NoteIcon className={classes.icon} /> Notebook</p>
                </div>
                <div id={classes.drafts} className={classes.sidebarChild}>
                    <p><ImportContactsIcon className={classes.icon} /> Drafts</p>
                </div>
                <div className={classes.links}>
                    <div id={classes.help} className={classes.sidebarChild}>
                        <HelpIcon className={classes.icon} /><a href="#">Help</a>
                    </div>
                    <div id={classes.feedback} className={classes.sidebarChild}>
                        <FeedbackIcon className={classes.icon} /><a href="#">Send feedback</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sidebar);