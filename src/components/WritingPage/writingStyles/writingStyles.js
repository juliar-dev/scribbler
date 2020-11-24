import colors from '../../../styles/colors';

const styles = theme => ({
    content: {
        width: "auto",
        display: "block",
        // marginLeft: theme.spacing(4),
        // marginRight: theme.spacing(4),
        background: colors.editBacking
    },
    dashboard: {
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: "15vw 20vw auto",
        marginTop: theme.spacing(6)
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