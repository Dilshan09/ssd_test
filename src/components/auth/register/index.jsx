import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()


    const onSubmit = async (e) => {

        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            setErrorMessage('')
            if (password !== confirmPassword) {
                setErrorMessage('Passwords do not match')
                setIsRegistering(false)
                return
            }
            try {
                await doCreateUserWithEmailAndPassword(email, password)
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    setErrorMessage('Email is already in use')
                } else {
                    setErrorMessage('An error occurred. Please try again later.')
                }
                setIsRegistering(false)
            }
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-white space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-white text-xl font-semibold lg:text-2xl">Create a New Account👽</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-lg text-white font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                requiwhite
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:white-600 shadow-lg rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-lg text-white font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                requiwhite
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-white-600 shadow-lg rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-lg text-white font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                requiwhite
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-white shadow-lg rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-sm text-red-400 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-lg text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-lg hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register