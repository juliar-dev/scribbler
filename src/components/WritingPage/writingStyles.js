import colors from '../../styles/colors';

const styles = theme => ({
    content: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
    },
    sidebarContainer: {
        display: "grid",
        gridTemplateRows: "12vh 7vh 10vh 8vh 8vh 37vh repeat(2, 3vh)",
        gridTemplateColumns: "auto",
        alignItems: "start",
        textAlign: "center",
        marginTop: theme.spacing(6),
        // padding: `0 ${theme.spacing(2)}px`,
        width: "14vw",
        height: "90vh",
        background:  "rgb(29, 29, 29)",
        borderRadius: "5px",
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
            padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
            color: "black",
            cursor: "pointer"
        },
        '& p': {
            background: colors.select,
            border: "none",
            width: "100%",
            padding: `${theme.spacing(2)}px 0`,
            color: "white",
            cursor: "pointer"
        },
        '& a': {
            alignSelf: "end",
            color: "white"
        }
    },
    search: {
        // borderRadius: "10px",
        // color: "red",
    },
});

export default styles;  