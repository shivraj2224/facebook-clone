import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();  

    const signIn = () => {
        auth
         .signInWithPopup(provider)
         .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
         })
         .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' alt="" />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKRJg4dW6XLjlvbdAIR12ldQ4wNEj3AnHscQ&usqp=CAU' alt="Facebook"/>
                {/* <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'/> */}
                
            </div>
            <button type='submit' onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
