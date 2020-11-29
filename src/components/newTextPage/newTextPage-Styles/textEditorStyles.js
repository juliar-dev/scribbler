import colors from '../../../styles/colors';

const styles = theme => ({
    container: {
        backgroundImage: `url(${require('../../../assets/ricepaper_v3.png')})`
    },
    textEditor: {
    },
    editorTools: {
        background: colors.label
    },
    fontSizeDropdown: {
        display: "inline-block",
    },
    
    fontSizeMenu: {
        display: "inline-block",
        position: "relative",
        top: "3px",
        background: "#FFFFFF",
        boxShadow: "0 0 2px",
        maxHeight: "150px",
        overflowY: "scroll",
    },
    
    // fontSizeMenu::-webkitScrollbar: {
    //     display: none
    // },
    
    fontSizeOption: {
        padding: "3px",
        '&::hover': {
            background: "#F0F0F0",
            cursor: "pointer",
        },
    },

})

export default styles;

