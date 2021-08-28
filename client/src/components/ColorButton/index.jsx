import React from 'react';
import { Button } from '@material-ui/core';


const ColorButton = (props) => {
    return <Button variant="contained" onClick={props.onClick} className={props.style}>{props.text}</Button>
}

export default ColorButton