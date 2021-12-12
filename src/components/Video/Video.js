import React, { useEffect, useState } from 'react'
import request from '../../api'
import './_Video.scss'

import moment from 'moment'
import numeral from 'numeral'

const Video = ({ video }) => {

    const { id, snippet: { channelId, title, channelTitle, publishedAt, thumbnails: { medium } } } = video
    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const formatedDuration = moment.utc(seconds * 1000).format("mm:ss")

    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request.get('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id,
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [id])

    useEffect(() => {
        const get_channel_icon = async () => {
            const { data: { items }
            } = await request.get('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    }, [channelId])



    return (
        <div className="video">
            <div className="video_top">
                <img src={medium.url} alt="" />
                <span>{formatedDuration}</span>
            </div>
            <div className="video_title">
                <img src={channelIcon?.url} alt="" />
                {title}
            </div>
            <div className='video_wrap'>
                <div className="video_channel">
                    <p>{channelTitle}</p>
                </div>
                <div className="video_details">
                    <span>
                        {numeral(views).format("0.a")} Views • {moment(publishedAt).fromNow()}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Video
