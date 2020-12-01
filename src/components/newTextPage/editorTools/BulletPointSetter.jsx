import React, {useState} from 'react'
import { RichUtils } from 'draft-js';

import styles from '../newTextPage-Styles/textEditorStyles';
import { Button, withStyles } from "@material-ui/core";

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

function BulletPointSetter(props) {
    const { classes, editorState, onChange } = props;

    const [ isShowingBulletPointMenu, setIsShowingBulletPointMenu  ] = useState(false);
    const [ bulletIcon, setBulletIcon ] = useState(<FormatListBulletedIcon />)


    function onBulletPointSetterClick(e, name) {
        e.preventDefault();
        onChange(RichUtils.toggleBlockType(editorState, `${name}-list-item`));
        name === "unordered" ? setBulletIcon(<FormatListBulletedIcon />) : setBulletIcon(<FormatListNumberedIcon />);
        setIsShowingBulletPointMenu(false);
    }

    return (
        <div className={classes.bulletPointSetter}>
            <div className={classes.bulletPointDropdown}>
                <Button onMouseDown={() => {setIsShowingBulletPointMenu(!isShowingBulletPointMenu)}}>{bulletIcon}| v</Button>
            </div>
                {isShowingBulletPointMenu && 
                <div className={classes.bulletPointMenu}>
                    <Button onMouseDown={(e) => onBulletPointSetterClick(e, "unordered")}><FormatListBulletedIcon /></Button>
                    <Button onMouseDown={(e) => onBulletPointSetterClick(e, "ordered")}><FormatListNumberedIcon /></Button>
                </div>
                }
        </div>
    )
}

export default withStyles(styles)(BulletPointSetter);