import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CommentsInput from '../CommentsInput';
import {useFormik} from 'formik'
import { Button, Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '750px',
        border: '2px',
        background: '#1C2128',
        padding: '1% 0',
        borderRadius: '10px',
        marginTop: '2%'
    },
    rootMobile: {
        width: '90%'
    },
    button: {
        width: '250px',
        height: '50px',
        background: '#30D171',
        alignSelf: 'center',
        margin: '2% 0',
        fontWeight: 'bold',
        fontSize: '15px',
        '&:hover': {
            background: '#e0e0e0'
        },
    },
    buttonMobile: {
        width: '200px',
        height: '40px',
        fontSize: '12px',
    },
    headText: {
        margin: '1% 2%',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    headTextMobile: {
        fontSize: '12px'
    },
    nameInput: {
        width: '275px',
    },
    review: {
        width: '740px'
    },
    reviewMobile: {
        width: '90%'
    },
}))


const CommentsInputForm = (props) => {
    const classes = useStyles()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const formik = useFormik({
        initialValues: {
          name: '',
          commentText: '',
        },
        onSubmit: (values) => {
            props.onClick(values.name, values.commentText)
        }
      });

    return <form className={`${classes.root} ${isTabletOrMobile && classes.rootMobile}`} onSubmit={formik.handleSubmit}>
        <div>
            <Typography className={`${classes.headText} ${isTabletOrMobile && classes.headTextMobile}`}>Имя</Typography>
            <CommentsInput style={classes.nameInput} maxLength={20} value={formik.values.name} onChange={formik.handleChange} name="name" fullWidth={false}/>
        </div>
        <div className={`${classes.review} ${isTabletOrMobile && classes.reviewMobile}`}>
            <Typography className={`${classes.headText} ${isTabletOrMobile && classes.headTextMobile}`}>Отзыв</Typography>
            <CommentsInput style={classes.textInput} rows={8} maxLength={400} value={formik.values.commentText} onChange={formik.handleChange} name="commentText" fullWidth={true}/>
        </div>
        <Button className={`${classes.button} ${isTabletOrMobile && classes.buttonMobile}`} onClick={() => {}} type='submit'>Создать комментарий</Button>
    </form>
}

export default CommentsInputForm