const styles = theme => ({
    title: {
        borderBottom: "1px solid white",
        paddingBottom: theme.spacing(10)
    },
    chapterList: {
        listStyle: "none",
        textAlign: "left",
        height: "70vh",
        overflowY: "scroll",
        '& input': {
            color: 'white',
            textTransform: "capitalize",
            textAlign: "left",
            cursor: "pointer",
            display: "inline-block",
        }
    },
})

export default styles;