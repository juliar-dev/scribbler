import colors from '../../../styles/colors';

const styles = theme => ({
    content: {
        width: "auto",
        display: "block",
        background: colors.subSidbar,
        color: colors.editBacking
    },
    dashboard: {
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: "15vw 20vw auto",
        marginTop: theme.spacing(5.5),
    },
    saveButton: {
        color: colors.toolBar,
        gridRow: '1 / 1',
        gridColumn: '3 / 3',
        justifySelf: 'end',
        alignSelf: 'end',
        zIndex: 10,
        '& Button': {
            color: colors.toolBar,
            margin: `0 0 ${theme.spacing(0.5)}px 0`
        }
    },
    sidebar: {
        gridRow: '1 / 1',
        gridColumn: '1 / 1',
    },
    quickView: {
        gridRow: '1 / 1',
        gridColumn: '2 / 2',
        borderRight: '1px dotted black'
    },
    editor: {
        gridRow: '1 / 1',
        gridColumn: '3 / 3',
    }
});

export default styles;  