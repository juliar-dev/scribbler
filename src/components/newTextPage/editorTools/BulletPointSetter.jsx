import React, {useState} from 'react'
import { RichUtils } from 'draft-js';

import styles from '../newTextPage-Styles/textEditorStyles';
import { withStyles } from "@material-ui/core";

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

function BulletPointSetter(props) {
    const { classes, editorState, onChange } = props;

    const [ isShowingBulletPointMenu, setIsShowingBulletPointMenu  ] = useState(false);
    const [ bulletIcon, setBulletIcon ] = useState(<FormatListBulletedIcon />)


    function onBulletPointSetterClick(e, name) {
        e.preventDefault();
        onChange(RichUtils.toggleBlockType(editorState, `${name}-list-item`));
        console.log(name)
        name === "unordered" ? setBulletIcon(<FormatListBulletedIcon />) : setBulletIcon(<FormatListNumberedIcon />);
        setIsShowingBulletPointMenu(false);
    }

    return (
        <div className={classes.bulletPointSetter}>
            <div className={classes.bulletPointDropdown}>
                <button onMouseDown={(e) => onBulletPointSetterClick(e, "unordered")}>{bulletIcon}</button>
                <button onMouseDown={() => {setIsShowingBulletPointMenu(!isShowingBulletPointMenu)}}>| v</button>
            </div>
                {isShowingBulletPointMenu && 
                <div className={classes.bulletPointMenu}>
                    <button onMouseDown={(e) => onBulletPointSetterClick(e, "unordered")}><FormatListBulletedIcon /></button>
                    <button onMouseDown={(e) => onBulletPointSetterClick(e, "ordered")}><FormatListNumberedIcon /></button>
                </div>
                }
        </div>
    )
}

export default withStyles(styles)(BulletPointSetter);