import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5px'
    },
    notchedOutline: {
        borderColor: 'white'
    },
    input: {
        background: 'white'
    }
}))

const CommentsInput = (props) => {
    const classes = useStyles()
    return <TextField
    className={`${classes.root} ${props.style}`}
    name={props.name} 
    value={props.value}
    onChange={props.onChange}
    autoComplete="off"
    variant="outlined"
    multiline
    size='medium'
    fullWidth={props.fullWidth}
    rows={props.rows}
    InputProps={{
        inputProps: { maxLength: props.maxLength },
        classes: {
            notchedOutline: classes.notchedOutline,
            input: classes.input,
        }
      }}
    />
}
export default CommentsInput