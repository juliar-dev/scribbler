import colors from './colors';

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
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
        margin: theme.spacing(),
        backgroundColor: 'rgb(255,183,77)',
    },
    form: {
        width: "100%",
    },
    radioContainer: {
        display: "inline-block",
    },
    radio: {
        '&$checked': {
            color: 'rgb(255,183,77)'
        }
    },
    submit: {
        marginTop: theme.spacing(3),
        backgroundColor: 'rgb(255,183,77)'
    },
    link: {
        fontSize: 10
    },
    footer: {
        fontSize: 10
    }
});

export default styles;  