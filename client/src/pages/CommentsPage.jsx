import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CommentsInputForm from '../components/CommentsInputForm';
import {observer} from 'mobx-react-lite'
import {Context} from '../index.js'
import {getComments, createComments} from '../http/httpHooks'
import { Typography } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1%'
    },
    header: {
        fontSize: '50px',
        fontWeight: 'bold'
    },
    headerMobile: {
        fontSize: '30px'
    },
    comment: {
        background: '#1C2128',
        color: 'white', 
        width: '1000px',
        minHeight: '120px',
        margin: '0.5% 0',
        borderRadius: '10px',
        padding: '10px 10px'
    },
    commentMobile: {
        width: '95%',
    },
    name: {
        color: '#30D171',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 600
    },
}))

const CommentsPage = observer(() => {
    const classes = useStyles()
    const {comment} = useContext(Context)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const postHandleDataClick = async (name, textComment) => {
        try {
            const response = await createComments(name, textComment).then(() => window.location.reload())
            return response
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getComments().then(data => comment.setComments(data))
    }, [comment])

    return <div className={classes.root}>
        <Typography className={`${classes.header} ${isTabletOrMobile && classes.headerMobile}`}>Комментарии учеников</Typography>
        {comment.comments.length !== 0 && comment.comments.map((item, index) => {
           return <div key={index} className={`${classes.comment} ${isTabletOrMobile && classes.commentMobile}`}>
               <Typography className={classes.name} >{item.name}</Typography>
               <Typography className={classes.text} >{item.text}</Typography>
               </div>
        })}
        <CommentsInputForm onClick={postHandleDataClick}/>
    </div>
})

export default CommentsPage