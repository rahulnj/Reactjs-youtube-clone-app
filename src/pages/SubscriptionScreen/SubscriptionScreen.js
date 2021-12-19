import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSubscriptionChannel } from '../../redux/actions/channel.action'
import './SubscriptionScreen.scss'

const SubscriptionScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubscriptionChannel())
    }, [dispatch])


    return (
        <div>

        </div>
    )
}

export default SubscriptionScreen

