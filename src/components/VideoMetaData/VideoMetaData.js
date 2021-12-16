import React from 'react'
import './VideoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'
import ReactShowMoreText from 'react-show-more-text'

function VideoMetaData({ video: { snippet, statistics }, videoId }) {
    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics


    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData_top">
                <h5>{title}</h5>
                <div className='d-flex justify-content-between align-items-center py-1'>
                    <span>
                        {numeral(viewCount).format('0.a')} Views •
                        {moment(publishedAt).fromNow()}
                    </span>

                    <div>
                        <span >
                            <MdThumbUp size={26} />{numeral(likeCount).format('0.a')}
                        </span>
                        <span >
                            <MdThumbDown size={26} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className='d-flex'>
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                        alt="" className='rounder-circle mr-3' />
                    <div className='d-flex flex-column'>
                        <span>
                            {channelTitle}
                        </span>
                        <span>
                            {numeral(10000).format('0.a')}
                            Subscribers
                        </span>
                    </div>
                </div>
                <button className='btn border-0 p-2 m-2'>Subscribe</button>
            </div>
            <div className="videoMetaData_description">
                <ReactShowMoreText lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass='showMoreText'
                    expanded={false}>
                    {description}
                </ReactShowMoreText>
            </div>
        </div >
    )
}

export default VideoMetaData
