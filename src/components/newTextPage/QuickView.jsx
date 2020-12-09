import React from "react";
import { withStyles, Button } from "@material-ui/core";
import styles from './newTextPage-Styles/quickView';

function QuickView(props) {
    const { classes, chapters, setSelectedChapter, title } = props;

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.main}>
                    { title !== '' ? <p className={classes.title}>{title}</p> : <p className={classes.title}>Title</p> }
                    <ul className={classes.chapterList}>
                        { 
                            chapters.length > 0 ? chapters.map((chapter) => {
                                return (
                                    <Button key={`${chapter.title}`} onClick={() => setSelectedChapter(chapter)}>
                                        {chapter.title !== '' ? chapter.title : 'Chapter'}
                                    </Button>
                                )
                            })
                            : 
                            <Button disabled placeholder='Chapter'>Chapter One</Button> 
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(QuickView);