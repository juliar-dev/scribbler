import React, { useState, useEffect } from "react";
import { withStyles, Button, Input } from "@material-ui/core";
import styles from './newTextPage-Styles/quickView';

import ReactListInput from 'react-list-input'

import AddIcon from '@material-ui/icons/Add';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import DeleteIcon from '@material-ui/icons/Delete';

let newChapters;

function QuickView (props) {
    const { classes, chapters, setChapters, setSelectedChapter, title, setTitle } = props;

    const [ value, setValue ] = useState([]);
    
    useEffect(() => {
        newChapters = chapters;
    }, [chapters])

    function handleChapters(value) {
        return value === '' ? null : setSelectedChapter(value);
    }

    const CustomInput = ({ value, onChange, type, onClick }) => 
        <Input style={{ borderBottom: '1px solid white', margin: '0 0 10px 0' }} type={type} value={value} onChange={e => onChange(e.target.value)} onClick={() => handleChapters(value)} />

    function handleBlur(value) {
        setSelectedChapter(value);
    }
    
    function handleAddChapter(canAdd, onAdd, value) {
        setChapters(chapters => [...chapters, {title: value, text: ''}]);
        return canAdd ? onAdd() : undefined
    }

    function handleDeleteChapter(removable, onRemove, value) {
        const filteredChapters = newChapters.filter(chapter => chapter.title !== value);
        setChapters(filteredChapters);
        return removable ? onRemove() : x => x
    }

    function Item ({decorateHandle, removable, onChange, onRemove, value, onClick}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '75% 15% 10%', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} onBlur={handleBlur(value)} onClick={onClick} />
                {decorateHandle(<span style={{cursor: 'move'}}><OpenWithIcon /></span>)}
                <span
                    onClick={() => handleDeleteChapter(removable, onRemove, value)}
                    style={{
                        cursor: removable ? 'pointer' : 'not-allowed',
                    }}><DeleteIcon /></span>
            </div>
        )
    }

    function StagingItem ({value, onAdd, canAdd, add, onChange}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} />
                <span
                    onClick={() => handleAddChapter(canAdd, onAdd, value)}
                    style={{
                        color: canAdd ? 'white' : 'gray',
                        cursor: canAdd ? 'pointer' : 'not-allowed'
                    }}><AddIcon /></span>
            </div>
        )
    }


        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.main}>
                        <Input className={classes.title} placeholder="Title" value={title} onChange={e => {setTitle(e.target.value)}} />
                        <ul className={classes.chapterList}>  
                            <ReactListInput
                                initialStagingValue=''
                                onChange={value => setValue(value)}
                                maxItems={Infinity}
                                minItems={1}
                                ItemComponent={Item}
                                StagingComponent={StagingItem}
                                value={value}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

export default withStyles(styles)(QuickView);