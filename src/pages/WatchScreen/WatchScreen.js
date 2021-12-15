import React from 'react'
import './WatchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import Comments from '../../components/Comments/Comments'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'

const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen_player">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        frameborder="0" title='my video' allowFullScreen width='100%' height='100%'>
                    </iframe>
                </div>
                <VideoMetaData />
                <Comments />
            </Col>
            <Col lg={4}>
                {[...Array(10)].map(() => (
                    <VideoHorizontal />
                ))}
            </Col>
        </Row >
    )
}

export default WatchScreen
