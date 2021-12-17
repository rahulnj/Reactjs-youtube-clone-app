import React from 'react'
import './VideoHorizontal.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap';

const VideoHorizontal = () => {
    const seconds = moment.duration('100').asSeconds()
    const formatedDuration = moment.utc(seconds * 1000).format("mm:ss")
    return (
        <Row className='videoHorizontal m-1 py-2 align-align-items-center'>
            <Col xs={6} md={4}
                className='videoHorizontal_left'>
                <LazyLoadImage src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" effect='blur'
                    effect='blur'
                    className='videoHorizontal_thumbnail'
                    wrapperClassName='videoHorizontal_thumbnail-wrapper'
                />
                <span className='video_top_duration'>{formatedDuration}</span>
            </Col>
            <Col xs={6} md={8}
                className='videoHorizontal_Right p-0'>
                <p className="videoHorizontal_title mb-1">
                    Be a devil in 2 weeks
                </p>
                <div className="videoHorizontal_details">
                    <p>Backbench code</p>

                    {numeral(123).format("0.a")} Views • {moment("1 year ago").fromNow()}

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
