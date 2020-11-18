import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./writingStyles";

import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';
import AddIcon from '@material-ui/icons/Add';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import NoteIcon from '@material-ui/icons/Note';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

import SearchBar from "material-ui-search-bar";

function Sidebar(props) {
    const { classes } = props;
    return (
        <div className={classes.container} >
            <div className={classes.sidebarContainer} >
                <div id={classes.searchbar} className={classes.sidebarChild}>
                    <p><SearchIcon /> Search</p>
                    {/* <SearchBar
                        className={classes.search}
                        // value="search"
                        // onChange={(newValue) => this.setState({ value: newValue })}
                        // onRequestSearch={() => doSomethingWith(this.state.value)}
                    /> */}
                </div>
                <div id={classes.upload} className={classes.sidebarChild}>
                    <button><PublishIcon /> Upload</button>
                </div>
                <div id={classes.write} className={classes.sidebarChild}>
                    <button><AddIcon /> New Story</button>
                </div>
                <div id={classes.storyFolder} className={classes.sidebarChild}>
                    <p><LocalLibraryIcon />Stories</p>
                </div>
                <div id={classes.notebook} className={classes.sidebarChild}>
                    <p><NoteIcon /> Notebook</p>
                </div>
                <div id={classes.drafts} className={classes.sidebarChild}>
                    <p><ImportContactsIcon /> Drafts</p>
                </div>
                <div className={classes.links}>
                    <div id={classes.help} className={classes.sidebarChild}>
                        <HelpIcon /><a href="#">Help</a>
                    </div>
                    <div id={classes.feedback} className={classes.sidebarChild}>
                        <FeedbackIcon/><a href="#">Send feedback</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sidebar);