import React from "react";
import { withStyles, Button, Input } from "@material-ui/core";
import styles from './newTextPage-Styles/quickView';

import ReactListInput from 'react-list-input'

import AddIcon from '@material-ui/icons/Add';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import DeleteIcon from '@material-ui/icons/Delete';

// const { classes, chapters, setSelectedChapter, title } = this.props;
let selectedChapterSetter;

const CustomInput = ({ value, onChange, type, onClick }) => 
        <Input style={{ borderBottom: '1px solid white', margin: '0 0 10px 0' }} type={type} value={value} onChange={e => onChange(e.target.value)} onClick={() => selectedChapterSetter(value)} />

class QuickView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: [...this.props.chapters]
        }
    }

    componentDidMount() {
        selectedChapterSetter = this.props.setSelectedChapter;
    }

    Item ({decorateHandle, removable, onChange, onRemove, value, onClick}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '75% 15% 10%', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} onBlur={selectedChapterSetter(value)} onClick={onClick} />
                {decorateHandle(<span style={{cursor: 'move'}}><OpenWithIcon /></span>)}
                <span
                    onClick={removable ? onRemove : x => x}
                    style={{
                        cursor: removable ? 'pointer' : 'not-allowed',
                    }}><DeleteIcon /></span>
            </div>
        )
    }

    StagingItem ({value, onAdd, canAdd, add, onChange}) {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridTemplateRows: '40px' }}>
                <CustomInput value={value} onChange={onChange} />
                <span
                    onClick={canAdd ? onAdd : undefined}
                    style={{
                        color: canAdd ? 'white' : 'gray',
                        cursor: canAdd ? 'pointer' : 'not-allowed'
                    }}><AddIcon /></span>
            </div>
        )
    }

    render() {
        const { classes, title, setTitle } = this.props;

        console.log(this.state.value)

        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.main}>
                        <Input className={classes.title} placeholder="Title" value={title} onChange={e => {setTitle(e.target.value)}} />
                        <ul className={classes.chapterList}>  
                            <ReactListInput
                                initialStagingValue=''
                                onChange={value => this.setState({value})}
                                maxItems={Infinity}
                                minItems={1}
                                ItemComponent={this.Item}
                                StagingComponent={this.StagingItem}
                                value={this.state.value}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(QuickView);