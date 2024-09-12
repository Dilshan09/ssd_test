import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='navbar'>
            {
                userLoggedIn
                    ?
                    <>
                         {userLoggedIn && location.pathname !== '/home' && ( // Hide "Take Me Home" if logged in and on the homepage
                            <Link className="link" to="/">
                                Take Me Home
                            </Link>
                            )}
                    </>
                    :
                    <>
                        {/* <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link> */}
                    </>
            }

        </nav>
    )
}

export default Header