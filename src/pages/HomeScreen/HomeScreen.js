import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar'
import Video from '../../components/Video/Video'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import SkeletonVideo from '../../components/Skeletons/SkeletonVideo'




const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }



    return (
        <Container>
            <CategoriesBar />

            <InfiniteScroll
                dataLength={videos.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto' />
                } className='row'>

                {!loading ? videos.map((video) => (
                    <Col lg={3} md={4} >
                        <Video video={video} key={video.id} />
                    </Col>
                ))
                    : [...Array(20)].map(() => (
                        <Col lg={3} md={4} >
                            <SkeletonVideo />
                        </Col>
                    ))}
            </InfiniteScroll>

        </Container >
    )
}

export default HomeScreen
