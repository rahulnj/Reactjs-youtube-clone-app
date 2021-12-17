import React, { useEffect } from 'react'
import './WatchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import Comments from '../../components/Comments/Comments'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const WatchScreen = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
    }, [dispatch, id])

    const { video, loading } = useSelector(state => state.selectedVideo)
    const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideos)
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

                <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>
            <Col lg={4}>
                {!loading ?
                    videos?.filter(video => video.snippet)
                        .map((video) => (
                            <VideoHorizontal video={video} key={video.id.videoId} />
                        ))
                    :
                    <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='130px' count={15} />
                    </SkeletonTheme>
                }
            </Col>
        </Row >
    )
}

export default WatchScreen
