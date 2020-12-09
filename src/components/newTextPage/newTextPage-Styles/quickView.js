const styles = theme => ({
    container: {
    },
    title: {
        borderBottom: "1px solid white",
        color: "white",
        margin: `${theme.spacing(2)}px 0`,
        padding: `0 ${theme.spacing(2)}px`,
    },
    chapterList: {
        listStyle: "none",
        textAlign: "left",
        height: "70vh",
        overflowY: "scroll",
        paddingRight: theme.spacing(4),
        '& input': {
            color: 'white',
            textTransform: "capitalize",
            textAlign: "left",
            cursor: "pointer",
            display: "inline-block",
        },
    },
})

export default styles;