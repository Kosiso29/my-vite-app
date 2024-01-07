/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from "react-router-dom";
import '../signin.css'
import '../App.css'

const SignIn = () => {
    return (
        <div className='signin'>
            <button>
                <Link to="/dashboard">
                    Login
                </Link>
            </button>
        </div>
    )
}

export default SignIn
