import React from 'react';

function Dashboard(props) {
    return(
        <>
            <h1>Dashboard!!!</h1>
            <span>User: {props.username}</span>
        </>
    )
}

export default Dashboard;