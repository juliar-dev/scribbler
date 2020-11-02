import React from 'react';

export default function PageComponent(props) {
    const styles = {
        backgroundColor: "white",
        height: "100vh",
        width: "100vw",
        overflowX: "hidden"
    }

    return <div style={styles}>{props.children}</div>
};