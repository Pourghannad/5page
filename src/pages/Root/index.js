import React, { useEffect } from 'react';
import { withRouter } from "react-router";
const RootPage = (props) => {
    useEffect(() => {
        props.history.push('/home')
    }, [props]);
    return (
        <></>
    )
}

export default withRouter(RootPage);