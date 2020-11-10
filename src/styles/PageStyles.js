const styles = theme => ({
    content: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        paddingBottom: 20,
    },
    toolbar: {
        background: "#1B1B1B",
    },
    navItems: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        '& span': {
            margin: theme.spacing(4),
        }
    },
    main: {
        width: "80%",
        margin: `${theme.spacing(14)}px`
    },
    title: {
        fontSize: 60,
        letterSpacing: 6,
        lineHeight: 2
    },
    subtitle: {
        marginTop: theme.spacing(3),
        fontSize: 30,
        letterSpacing: 4,
    },
    button: {
        marginTop: theme.spacing(6),
        backgroundColor: theme.palette.warning.light,
        borderRadius: 1,
        color: "#FFFFFF",
        height: 50,
        width: 150,
        boxShadow: "none"
    },
    buttonFooter: {
        marginTop: theme.spacing(4),
        fontSize: 15
    }
});

export default styles;  