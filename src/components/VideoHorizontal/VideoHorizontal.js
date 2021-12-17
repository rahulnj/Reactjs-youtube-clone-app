import React, { useEffect, useState } from 'react'
import './VideoHorizontal.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap';
import request from '../../api';
import { useNavigate } from 'react-router';

const VideoHorizontal = ({ video }) => {
    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const { id,
        snippet: {
            channelId, channelTitle, description, title, publishedAt, thumbnails
        },
    } = video
    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request.get('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId,
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

    const seconds = moment.duration(duration).asSeconds()
    const formatedDuration = moment.utc(seconds * 1000).format("mm:ss")
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/watch/${id.videoId}`)
    }
    return (
        <Row className='videoHorizontal m-1 py-2 align-align-items-center' onClick={handleClick}>
            <Col xs={6} md={6}
                className='videoHorizontal_left'>
                <LazyLoadImage src={thumbnails.medium.url} effect='blur'
                    effect='blur'
                    className='videoHorizontal_thumbnail'
                    wrapperClassName='videoHorizontal_thumbnail-wrapper'
                />
                <span className='videoHorizontal_duration'>{formatedDuration}</span>
            </Col>
            <Col xs={6} md={6}
                className='videoHorizontal_Right p-0'>
                <p className="videoHorizontal_title mb-1">
                    {title}
                </p>
                <div className="videoHorizontal_details">
                    <p className='mb-0'>{channelTitle}</p>

                    {numeral(views).format("0.a")} Views • {moment(publishedAt).fromNow()}

                </div>
                <div className='videoHorizontal_channel d-flex align-items-center my-1'>
                    {/* {
                    <LazyLoadImage src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
                        effect='blur' />
                } */}
                </div>

            </Col>
        </Row>
    )
}


export default VideoHorizontal
