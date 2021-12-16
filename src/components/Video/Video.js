import React, { useEffect, useState } from 'react'
import request from '../../api'
import './_Video.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import { useNavigate } from 'react-router';

const Video = ({ video }) => {

    const { id, snippet: { channelId, title, channelTitle, publishedAt, thumbnails: { medium } } } = video
    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const formatedDuration = moment.utc(seconds * 1000).format("mm:ss")
    const navigate = useNavigate();
    //To know if the id is in object form or in normal form
    const _videoId = id?.videoId || id;



    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request.get('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [_videoId])

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

    const handleVideoClick = () => {
        console.log(_videoId);
        navigate(`/watch/${_videoId}`)
    }


    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video_top">
                {/* <img src={medium.url} alt="" /> */}
                <LazyLoadImage src={medium.url} effect='blur' />
                <span className='video_top_duration'>{formatedDuration}</span>
            </div>
            <div className="video_title">
                {/* <img src={channelIcon?.url} alt="" /> */}
                <LazyLoadImage src={channelIcon?.url} />
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
