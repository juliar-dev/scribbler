import React, {useState} from 'react'

// import './EditorToolbar.css'
import styles from '../newTextPage-Styles/textEditorStyles';

import { withStyles } from "@material-ui/core";

function FontSizeSetter(props) {
    const { classes, editorState, setEditorState, styles } = props;

    // const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
    const [ isShowingFontSizeMenu, setIsShowingFontSizeMenu  ] = useState(false);

    const fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 38, 46, 54, 62, 72];
    const [ currentFontSize, setCurrentFontSize ] = useState('16')

    function conditionallyRenderDropdown(e) {
        e.preventDefault();
        setIsShowingFontSizeMenu(!isShowingFontSizeMenu);
    }

    function setFontSize(e, value) {
        console.log(value)
        e.preventDefault();
        setCurrentFontSize(value.substring(0, 2));
        const newEditorState = styles.fontSize.remove(editorState);
        setEditorState(styles.fontSize.add(newEditorState, value))
        setIsShowingFontSizeMenu(false)

    }

    return (
                            <div className={classes.fontSizeDropdown} styles={styles}>
                                <button onMouseDown={(e) => conditionallyRenderDropdown(e)}> 
                                    {currentFontSize} | v
                                </button>
                                    <div className={classes.fontSizeMenu}>
                                        {isShowingFontSizeMenu && fontSizes.map(size => {
                                            return <div className={classes.fontSizeOption} 
                                                        key={`font-size-${size}`} 
                                                        onMouseDown={e => setFontSize(e, `${size}px`)} >
                                                            {size.toString()}
                                                    </div>
                                        })}
                                    </div>
                            </div>
    )
}

export default withStyles(styles)(FontSizeSetter);