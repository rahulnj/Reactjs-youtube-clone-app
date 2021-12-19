import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAIL, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionType";


export const channelDetailsReducer = (
    state = {
        loading: true,
        channel: {}
    },
    action
) => {
    const { payload, type } = action
    switch (type) {
        case CHANNEL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CHANNEL_DETAILS_SUCCESS:
            return {
                ...state,
                channel: payload,
                loading: false
            }
        case CHANNEL_DETAILS_FAIL:
            return {
                ...state,
                channel: null,
                loading: false,
                error: payload
            }
        default:
            return state;

    }

}

export const subscriptionsChannelReducer = (
    state = {
        loading: true,
        channel: []
    },
    action
) => {
    const { payload, type } = action
    switch (type) {
        case SUBSCRIPTIONS_CHANNEL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUBSCRIPTIONS_CHANNEL_SUCCESS:
            return {
                ...state,
                channel: payload,
                loading: false
            }
        case SUBSCRIPTIONS_CHANNEL_FAIL:
            return {
                ...state,
                channel: null,
                loading: false,
                error: payload
            }
        default:
            return state;

    }

}