import colors from '../../../styles/colors';

const styles = theme => ({
    container: {
        // backgroundImage: `url(${require('../../../assets/ricepaper_v3.png')})`,
        background: "white"
    },
    textEditor: {
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "40px auto"
    },
    editorTools: {
        position: "abolute",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: theme.spacing(5),
    },
    editor: {
        height: "76vh",
        overflowY: "scroll"
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

