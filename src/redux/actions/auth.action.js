import { auth } from '../../firebase'
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType";


export const login = () => dispatch => {

    const provider = new GoogleAuthProvider();
    try {
        dispatch({
            type: LOGIN_REQUEST
        })


        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                console.log(result);
                // The signed-in user info.
                const profile = {
                    name: result.user.displayName,
                    photoURL: result.user.photoURL
                }
                sessionStorage.setItem('ytc-access-token', accessToken)
                sessionStorage.setItem('ytc-user', JSON.stringify(profile))


                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: accessToken
                })
                dispatch({
                    type: LOAD_PROFILE,
                    payload: profile
                })
            })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })


    }
}

export const logOut = () => dispatch => {
    signOut(auth).then(() => {
        dispatch({
            type: LOG_OUT,
        })

        sessionStorage.removeItem("ytc-access-token")
        sessionStorage.removeItem("ytc-user")

    }).catch((error) => {
        // An error happened.
    });
}