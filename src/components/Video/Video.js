import React from 'react'
import './_Video.scss'


const Video = () => {
    return (
        <div className="video">
            <div className="video_top">
                <img src="https://i.ytimg.com/vi/0L8cQ9nRtuE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC39C4XSt2SEPYW_JM16E0wi4nkkg" alt="" />
                <span>03:00</span>
            </div>
            <div className="video_title">
                <img src="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                How to be a frontend developer
            </div>
            <div className='video_wrap'>
                <div className="video_channel">
                    <p>Codepen</p>
                </div>
                <div className="video_details">
                    <span>
                        3.3m Views •
                        5 days ago
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Video
