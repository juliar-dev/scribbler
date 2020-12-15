import React, { useState } from "react";
import { withStyles, Input, Typography } from "@material-ui/core";
import styles from './newTextPage-Styles/quickView';

import ReactListInput from 'react-list-input'

import AddIcon from '@material-ui/icons/Add';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import DeleteIcon from '@material-ui/icons/Delete';

function QuickView (props) {

    const { classes, selectedChapter, setSelectedChapter, title, setTitle, saveAll } = props;

    const [ values, setValues ] = useState([]);
    const [ isSaved, setIsSaved ] = useState(false);

    const CustomInput = ({ value, onChange, type, onAdd, canAdd }) => 
        <Input style={{ borderBottom: '1px solid white', margin: '0 0 10px 0' }} 
                type={type} 
                value={value} 
                onChange={e => handleChange(onChange, e.target.value)} 
                onBlur={(e) => handleBlur(e.target.value)} 
                onClick={(e) => handleClick(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e.key, onAdd, canAdd)}
                key={value}
                autoFocus={!selectedChapter}
        />

    function handleChange(change, value) {
        saveAll(values);
        change(value);
        setIsSaved(false);
    }

    function handleBlur(value) {
        setIsSaved(true);
        setSelectedChapter(value);
    }

    function handleKeyPress(key, onAdd, canAdd) {
        if (key === 'Enter' || key === 'Tab') {
            return canAdd ? onAdd() : undefined;
        }
    }

    function handleClick(value) {
        return value !== '' ? setSelectedChapter(value) : setSelectedChapter(null);
    }

    function handleDelete(removable, onRemove) {
        setSelectedChapter(null);
        if (removable) {
            onRemove();
        }
    }

    function Item ({decorateHandle, removable, onChange, onRemove, value, onClick}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '75% 15% 10%', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} />
                {decorateHandle(<span style={{cursor: 'move'}}><OpenWithIcon /></span>)}
                <span
                    onClick={() => {handleDelete(removable, onRemove)}}
                    style={{
                        cursor: removable ? 'pointer' : 'not-allowed',
                    }}><DeleteIcon /></span>
            </div>
        )
    }

    function StagingItem ({value, onAdd, canAdd, add, onChange}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} onAdd={onAdd} canAdd={canAdd} />
                <span
                    onClick={canAdd ? onAdd : undefined}
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
                        <div>
                            <Input className={classes.title} placeholder="Title" value={title} onChange={e => {setTitle(e.target.value)}} />
                        </div>
                        <ul className={classes.chapterList}>  
                            <ReactListInput
                                initialStagingValue=''
                                onChange={values => setValues(values)}
                                maxItems={Infinity}
                                minItems={1}
                                ItemComponent={Item}
                                StagingComponent={StagingItem}
                                value={values}
                            />
                        </ul>
                        <Typography>{isSaved ? 'Saved' : 'unsaved changes'}</Typography>
                    </div>
                </div>
            </div>
        )
    }

export default withStyles(styles)(QuickView);