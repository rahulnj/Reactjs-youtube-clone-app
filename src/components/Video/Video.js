import React from 'react'
import './_Video.scss'

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video_top">
                <img src="https://i.ytimg.com/vi/0L8cQ9nRtuE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC39C4XSt2SEPYW_JM16E0wi4nkkg" alt="" />
                <span>03:00</span>
            </div>
            <div className="video_title">
                How to be a frontend developer
            </div>
            <div className="video_details">
                <span>
                    <AiFillEye /> 3.3m Views •
                </span>
                <span>
                    5 days ago
                </span>
            </div>
            <div className="video_channel">
                <img src="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Codepen</p>
            </div>
        </div>
    )
}

export default Video
