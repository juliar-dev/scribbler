import colors from '../../../styles/colors';

const styles = theme => ({
    container: {
        background: colors.editBacking,
        color: 'black'
    },
    textEditor: {
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "40px auto",
        color: colors.toolBar
    },

})

export default styles;

