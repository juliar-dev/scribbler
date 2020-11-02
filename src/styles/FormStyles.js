const styles = theme => ({
    container: {
        // background: `linear-gradient(to bottom, rgba(255, 183, 77, 0.5), rgba(219, 146, 0, 0.6) )`
    },
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        paddingBottom: 20,
        [theme.breakpoints.up("sm")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        // marginBottom: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
        // boxShadow: 30
    },
    avatar: {
        margin: theme.spacing(),
        backgroundColor: theme.palette.warning.light,
    },
    form: {
        width: "100%",
        // marginTop: theme.spacing(3)
    },
    radioContainer: {
        display: "inline-block",
    },
    radio: {
        '&$checked': {
            color: theme.palette.warning.light
        }
    },
    submit: {
        marginTop: theme.spacing(3),
        backgroundColor: theme.palette.warning.light
    },
    link: {
        fontSize: 10
    },
    footer: {
        fontSize: 10
    }
});

export default styles;  