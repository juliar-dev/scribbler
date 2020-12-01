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
        marginTop: theme.spacing(5.5)
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