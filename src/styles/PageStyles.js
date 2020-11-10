const styles = theme => ({
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
    toolbar: {
        background: "#1B1B1B"
    },
    navItems: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        '& span': {
            margin: theme.spacing(5),
        }
    },
});

export default styles;  