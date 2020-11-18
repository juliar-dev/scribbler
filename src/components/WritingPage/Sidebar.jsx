import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./writingStyles";

import SearchBar from "material-ui-search-bar";

function Sidebar(props) {
    const { classes } = props;
    return (
        <div className={classes.container} >
            <div className={classes.sidebarContainer} >
                <div id={classes.searchbar} className={classes.sidebarChild}>
                    <p>Search</p>
                    {/* <SearchBar
                        className={classes.search}
                        // value="search"
                        // onChange={(newValue) => this.setState({ value: newValue })}
                        // onRequestSearch={() => doSomethingWith(this.state.value)}
                    /> */}
                </div>
                <div id={classes.upload} className={classes.sidebarChild}>
                    <button>+ Upload</button>
                </div>
                <div id={classes.write} className={classes.sidebarChild}>
                    <button>+ New Story</button>
                </div>
                <div id={classes.storyFolder} className={classes.sidebarChild}>
                    <p>Stories</p>
                </div>
                <div id={classes.notebook} className={classes.sidebarChild}>
                    <p>Notebook</p>
                </div>
                <div id={classes.drafts} className={classes.sidebarChild}>
                    <p>Drafts</p>
                </div>
                <div id={classes.help} className={classes.sidebarChild}>
                    <a href="#">Help</a>
                </div>
                <div id={classes.feedback} className={classes.sidebarChild}>
                    <a href="#">Send feedback</a>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Sidebar);