import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comment.action'
import SingleComment from '../SingleComment/SingleComment'
import './Comments.scss'

const Comments = ({ videoId, totalComments }) => {

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId))
    }, [videoId, dispatch])

    const comments = useSelector(state => state.commentList.comments)
    console.log(comments);

    const [text, setText] = useState('')

    const _comments = comments?.map(comments => comments.snippet.topLevelComment.snippet)

    //the request is showing a 401 error
    const handleComment = (e) => {
        e.preventDefault()
        if (text.length === 0) return
        dispatch(addComment(videoId, text))
    }

    return (
        <div className="comments">
            <p>{totalComments} comments</p>
            <div className='comments_form d-flex w-100 my-2'>
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                    alt="" className='rounder-circle mr-3' />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input type="text"
                        className='flex-grow-1'
                        placeholder='Write a comment...'
                        value={text}
                        onChange={e => setText(e.target.value)} />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>
            <div className='comments_list'>
                {_comments?.map((comment, i) => (
                    <SingleComment comment={comment} key={i} />
                ))
                }

            </div>
        </div>
    )
}


export default Comments
