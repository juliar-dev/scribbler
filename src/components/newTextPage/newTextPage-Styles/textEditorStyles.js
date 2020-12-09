import colors from '../../../styles/colors';

const styles = theme => ({
    container: {
        background: colors.editBacking
    },
    prompt: {
        background: colors.subSidbar,
        color: colors.toolBar,
        fontSize: '120%',
        marginTop: theme.spacing(38)
    },
    textEditor: {
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "40px auto",
        color: colors.toolBar
    },
    editorTools: {
        position: "abolute",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: theme.spacing(8),
        borderRight: "1px solid black",
        background: colors.toolBar,
        '& button': {
            background: "none",
            color: colors.editBacking
        },
        '& button:hover': {
            background: 'white',
            color: 'black'
        }
    },
    editor: {
        height: "81vh",
        overflowY: "scroll",
        cursor: "text",
        padding: `  0 ${theme.spacing(6)}px 
                    0  ${theme.spacing(10)}px`,
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em',
            cursor: 'pointer'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.5)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.5)',
            outline: '1px solid slategrey'
        }
    },
    left: {
        textAlign: "left"
    },
    right: {
        textAlign: 'right'
    },
    center: {
        textAlign: 'center'
    },
    justify: {
        textAlign: 'justify'
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
    fontSizeOption: {
        padding: "3px",
        '&::hover': {
            background: "#F0F0F0",
            cursor: "pointer",
        },
    },

})

export default styles;

