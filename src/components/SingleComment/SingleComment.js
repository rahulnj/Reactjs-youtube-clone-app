import React from 'react'
import './SingleComment.scss'
import moment from 'moment'
const SingleComment = () => {
    return (
        <div className='comment p-2 d-flex'>
            <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt="" className='rounder-circle mr-3' />
            <div className="comment_body">
                <p className="comment_header mb-1">
                    Rahul • {moment('2020-06-6').fromNow()}
                </p>
                <p className='mb-0'>Lets do this...</p>
            </div>
        </div>
    )
}

export default SingleComment
