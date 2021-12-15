import React from 'react'
import SingleComment from '../SingleComment/SingleComment'
import './Comments.scss'

const Comments = () => {
    const handleComment = () => {

    }
    return (
        <div className="comments">
            <p>123 comments</p>
            <div className='comments_form d-flex w-100 my-2'>
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                    alt="" className='rounder-circle mr-3' />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input type="text"
                        className='flex-grow-1'
                        placeholder='Write a comment...' />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>
            <div className='comments_list'>
                {
                    [...Array(15)].map(() => (
                        <SingleComment />
                    ))
                }

            </div>
        </div>
    )
}


export default Comments
