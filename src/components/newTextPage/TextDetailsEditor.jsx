import React, { useState, useEffect } from "react";

import { Button, Typography, TextField, withStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './newTextPage-Styles/textDetailsEditorStyles';

function TextDetailsEditor(props) {
    const { classes, story, setStory, setSelectedChapter } = props;

    const [ genre, setGenre ] = useState('');
    const [ chapter, setChapter ] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;

        const editedStory = { ...story };

        switch(id) {
            case 'title':
                editedStory.title = value;
                break;
            case 'blurb':
                editedStory.blurb = value;
                break;
            case 'genre':
                setGenre(value);
                break;
            case 'chapter':
                setChapter(value);
                break;
            default:
                return;
        }

        setStory(editedStory);
    }

    const handleClick = (id) => {
        const editedStory = { ...story };

        if (id === 'genreAdder') {
            editedStory.genres.push(genre) 
        } else {
            editedStory.chapters.push({title: chapter, content: ''});
        }
        
        setStory(editedStory);

        setGenre('');
        setChapter('');
    }

    const handleDelete = (selected) => {
        const editedStory = { ...story };

        const filteredChapters = editedStory.chapters.filter(chapter => chapter.title !== selected.title);

        editedStory.chapters = filteredChapters

        setStory(editedStory);
    }

    return (
        <div className={classes.container}>
            <div className={classes.textDetailsEditor} >
                <TextField className={classes.titleInput}
                        id='title'
                        variant='filled'
                        placeholder='Title'
                        value={story.title} 
                        onChange={(e) => handleChange(e)} 
                />
                <TextField className={classes.blurbInput}
                        id='blurb'
                        variant='filled'
                        placeholder='Description/blurb'
                        multiline
                        value={story.blurb} 
                        onChange={(e) => handleChange(e)} 
                />
                <div>
                    <TextField className={classes.genresInput}
                            id='genre'
                            variant='filled'
                            placeholder='Genre(s)'
                            value={genre}
                            onChange={(e) => handleChange(e)} 
                    />
                    {story.genres.length > 0 && story.genres.map(genre => {
                        return <div key={genre}>{genre}</div>
                    })}
                    <Button onClick={() => handleClick('genreAdder')}>Add</Button>
                </div>
                <div>
                    <TextField className={classes.chaptersInput}
                            id='chapter'
                            variant='filled'
                            placeholder='Chapter'
                            value={chapter}
                            onChange={(e) => handleChange(e)} 
                    />
                    {story.chapters.length > 0 && story.chapters.map(chapter => {
                        return ( 
                            <div key={chapter.title}>
                                <Button onClick={() => {setSelectedChapter(chapter.title)}}>{chapter.title}</Button>
                                <DeleteIcon onClick={() => handleDelete(chapter)} />
                            </div>
                        )
                    })}
                    <Button onClick={() => handleClick('chapterAdder')}>Add</Button>
                </div>
            </div> 
        </div>
    )
}

export default withStyles(styles)(TextDetailsEditor);


//TODO: Need to sort styling for text editor page.