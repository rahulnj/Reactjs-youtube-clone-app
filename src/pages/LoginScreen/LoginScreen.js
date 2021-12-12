import React, { useEffect } from 'react'
import { login } from '../../redux/actions/auth.action'
import { useDispatch, useSelector } from 'react-redux'
import './LoginScreen.scss'

import { useNavigate } from "react-router-dom";

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }

    }, [accessToken, navigate])

    return (
        <div className='login'>
            <div className="login_container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick={handleLogin}>Login with google</button>
                <p>youtube clone using youtube api</p>
            </div>
        </div>
    )
}

export default LoginScreen
