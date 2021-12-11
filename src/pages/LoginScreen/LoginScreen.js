import React from 'react'
import { login } from '../../redux/actions/auth.action'
import { useDispatch } from 'react-redux'
import './LoginScreen.scss'


const LoginScreen = () => {

    const dispatch = useDispatch()
    const handleLogin = () => {
        console.log("worked");
        dispatch(login())
    }


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
