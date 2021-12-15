import React from 'react'
import './VideoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'
import ReactShowMoreText from 'react-show-more-text'

function VideoMetaData() {
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData_top">
                <h5>Video Tittle</h5>
                <div className='d-flex justify-content-between align-items-center py-1'>
                    <span>
                        {numeral(10000).format('0.a')} Views •
                        {moment('2020-06-6').fromNow()}
                    </span>

                    <div>
                        <span >
                            <MdThumbUp size={26} />{numeral(10000).format('0.a')}
                        </span>
                        <span >
                            <MdThumbDown size={26} />{numeral(10000).format('0.a')}
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
                            Backbench coder
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure explicabo impedit corrupti, nobis neque sit hic nam saepe officia fuga consequuntur aut tempore architecto ratione voluptates et necessitatibus doloribus animi! Reprehenderit illo rerum quo
                    fugiat. Corrupti saepe laudantium ab deserunt deleniti. Quisquam maxime aut dignissimos natus aliquid quod eos esse!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure explicabo impedit corrupti, nobis neque sit hic nam saepe officia fuga consequuntur aut tempore architecto ratione voluptates et necessitatibus doloribus animi! Reprehenderit illo rerum quo
                    fugiat. Corrupti saepe laudantium ab deserunt deleniti. Quisquam maxime aut dignissimos natus aliquid quod eos esse!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure explicabo impedit corrupti, nobis neque sit hic nam saepe officia fuga consequuntur aut tempore architecto ratione voluptates et necessitatibus doloribus animi! Reprehenderit illo rerum quo
                    fugiat. Corrupti saepe laudantium ab deserunt deleniti. Quisquam maxime aut dignissimos natus aliquid quod eos esse!
                </ReactShowMoreText>
            </div>
        </div >
    )
}

export default VideoMetaData
