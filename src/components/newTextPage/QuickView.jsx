import React, { useState } from "react";
import { withStyles, Button, Input } from "@material-ui/core";
import styles from './newTextPage-Styles/quickView';

import ReactListInput from 'react-list-input'

import AddIcon from '@material-ui/icons/Add';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

function QuickView (props) {

    const { classes, selectedChapter, setSelectedChapter, title, setTitle, saveAll } = props;

    const [ value, setValue ] = useState([]);

    const CustomInput = ({ value, onChange, type, onAdd, canAdd }) => 
        <Input style={{ borderBottom: '1px solid white', margin: '0 0 10px 0' }} 
                type={type} 
                value={value} 
                onChange={e => handleChange(onChange, e.target.value)} 
                onBlur={(e) => handleBlur(e.target.value, onAdd, canAdd)} 
                onClick={(e) => handleClick(e.target.value)}
        />

    function handleChange(change, value) {
        change(value);
    }

    function handleBlur(value, onAdd, canAdd) {
        setSelectedChapter(value);
        return canAdd ? onAdd() : undefined;
    }

    function handleClick(value) {
        return value !== '' ? setSelectedChapter(value) : null;
    }

    function Item ({decorateHandle, removable, onChange, onRemove, value, onClick}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '75% 15% 10%', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} onBlur={handleBlur(value)} />
                {decorateHandle(<span style={{cursor: 'move'}}><OpenWithIcon /></span>)}
                <span
                    onClick={removable ? onRemove : x => x}
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
                        <Button>
                            <SaveIcon onClick={() => saveAll(value)}/>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

export default withStyles(styles)(QuickView);