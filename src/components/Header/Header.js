import React from 'react'
import './_Header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'




const Header = ({ handleToggleSidebar }) => {
    return (
        <div className='border border-dark header'>
            <FaBars className="header_menu" size={26}
                onClick={() => handleToggleSidebar()}
            />
            <img className="header_logo" src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
                alt="" />
            <form>
                <input type="text" placeholder="search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header_icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                    alt="" />
            </div>
        </div>
    )
}

export default Header
