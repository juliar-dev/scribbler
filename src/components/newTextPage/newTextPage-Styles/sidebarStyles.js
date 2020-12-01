import colors from '../../../styles/colors';

const styles = theme => ({
    sidebarContainer: {
        display: "grid",
        gridTemplateRows: "10vh 6.6vh 10vh 8vh 8vh 40vh repeat(2, 4vh)",
        gridTemplateColumns: "auto",
        alignItems: "start",
        textAlign: "center",
        width: "14vw",
        height: "91vh",
        background: colors.backing,
    },
    sidebarChild: {
        margin: 0,
        width: "100%",
        '& button': {
            background: colors.button,
            border: "none",
            borderRadius: "25px",
            textAlign: "left",
            width: "90%",
            padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
            color: "black",
            cursor: "pointer",
        },
        '& p': {
            background: colors.select,
            border: "none",
            width: "70%",
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
            color: "white",
            cursor: "pointer",
            display: 'flex',
            alignItems: 'center',
        },
        '& a': {
            alignSelf: "end",
            textAlign: "left",
            color: "white",
        }
    },
    buttonIcon : {
        display: "inline-flex",
        verticalAlign: "middle",
        marginBottom: theme.spacing(0.5)
    },
    icon : {
        display: "inline-flex",
        verticalAlign: "middle",
        color: "white",
        marginRight: theme.spacing(1)
    },
    links: {
        borderTop: "0.5px solid white",
    },
    search: {
        background: "white",
        borderRadius: "25px",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1.2),
        width: "90%",
        opacity: 0.5
    },
    searchBar: {
        height: "20px",
        width: "130px",
        border: "none"
    },
    searchIcon: {
        marginTop: theme.spacing(1),
        color: "grey"
    }
});

export default styles;  