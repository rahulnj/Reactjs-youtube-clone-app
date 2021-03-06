import React from 'react'
import './_Sidebar.scss'
import { useNavigate } from "react-router-dom";
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from "react-icons/md"

import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOutHandler = () => {
        console.log("logout");
        dispatch(logOut())
    }



    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}
            onClick={() => handleToggleSidebar(false)}
        >
            <li>
                <MdHome size={23} />
                <span onClick={() => navigate("/")}>Home</span >
            </li>
            <Link to="/feed/subscriptions">
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
            </Link>
            <li>
                < MdThumbUp size={23} />
                <span>Liked Video</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't Know</span>
            </li>
            <hr />
            <li onClick={logOutHandler}>
                <MdExitToApp size={23} />
                <span>Logout</span>
            </li>
            <hr />
        </nav >
    )
}

export default Sidebar
