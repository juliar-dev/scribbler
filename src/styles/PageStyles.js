import colors from './colors';

const styles = theme => ({
    content: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        paddingBottom: 20,
    },
    appBar: { 
        // background: 'transparent', 
        // boxShadow: 'none'
    },
    toolbar: {
        background: colors.navBar,
        position: "fixed",
        width: "100%"
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
        width: "100%",
        textAlign: "center",
        marginTop: theme.spacing(16),
        '&::before': {
            content: '" "',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: theme.spacing(63),
            zIndex: -1,
            opacity: 0.6,
            // backgroundImage: 'url(https://peaceislamicschool.com/wp-content/uploads/2019/10/banner-img-1.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 50% 0,
            msBackgroundSize: "cover",
            oBackgroundSize: "cover",
            mozBackgroundSize: "cover",
            webkitBackgroundSize: "cover",
            backgroundSize: "cover",
            paddingBottom: theme.spacing(1)
        }
    },
    title: {
        fontSize: 60,
        letterSpacing: 6,
        lineHeight: 1
    },
    subtitle: {
        marginTop: theme.spacing(4),
        fontSize: 30,
        letterSpacing: 4,
    },
    button: {
        marginTop: theme.spacing(6),
        backgroundColor: 'rgb(255, 201, 121)',
        borderRadius: 1,
        color: "#FFFFFF",
        height: 50,
        width: 150,
        boxShadow: "none"
    },
    buttonFooter: {
        marginTop: theme.spacing(4),
        fontSize: 15
    },
    aboutSection: {
        textAlign: "left",
        marginTop: theme.spacing(13.6),
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "auto auto",
        gridGap: 20,
        marginLeft: 0
        // '&::before': {
        //     content: '" "',
        //     position: "absolute",
        //     right: theme.spacing(44),
        //     width: theme.spacing(200),
        //     height: theme.spacing(100),
        //     transform: 'scale(0.4)',
        //     zIndex: -1,
        //     backgroundImage: 'url(https://cdn.writermag.com/2016/12/blogs-versus-articles.jpg)',
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        // }
    },
    // item2: {
    //     gridRow: "1 / 1",
    //     gridColumn: "2 / 2",
    //     background: colors.navBar
    // },
    // item3: {
    //     gridRow: "1 / 1",
    //     gridColumn: "1 / 1",
    //     width: theme.spacing(100),
    //     height: theme.spacing(50),
    //     // transform: 'scale(0.1)',
    //     // backgroundSize: "cover"
    // }
    grid: {
        display: "grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns: "auto auto",
        gridGap: 30
    },
    item1: {
        gridRow: "1 / 1",
        gridColumn: "1 / 1",
        border: "1px solid black",
        padding: "30vh 0"
    },
    item2: {
        gridRow: "1 / 1",
        gridColumn: "2 / 2",
        border: "1px solid black",
        padding: "30vh 0"
    }
});

export default styles;  