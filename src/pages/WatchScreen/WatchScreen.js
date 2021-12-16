import React, { useEffect } from 'react'
import './WatchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import Comments from '../../components/Comments/Comments'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoById } from '../../redux/actions/videos.action'

const WatchScreen = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id))
    }, [dispatch, id])

    const { video, loading } = useSelector(state => state.selectedVideo)

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen_player">
                    <iframe src={`https://www.youtube.com/embed/${id}`}
                        frameborder="0" title={video?.snippet?.title} allowFullScreen width='100%' height='100%'>
                    </iframe>
                </div>
                {
                    !loading ? <VideoMetaData video={video} videoId={id} /> : <h3>Loading screen</h3>
                }

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
