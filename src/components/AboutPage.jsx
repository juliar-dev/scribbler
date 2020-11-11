import React from "react";
import { withStyles } from '@material-ui/core';
import styles from '../styles/PageStyles';

function AboutPage(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <div style={{ display: "flex" }}>
                <div className={classes.aboutImg} style={{ height: 400, width: 600, border: '1px solid black', marginTop: 100 }}>
                </div>
                <p style={{ width: "50%", marginTop: 100, marginLeft: 40 }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
                    undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
                    the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
        </div>
    )
}

export default withStyles(styles)(AboutPage);