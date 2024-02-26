import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AUTH_ROUTE } from '../../api/apiRoutes'
import useFetch from '../../hooks/useFetch'
import cookieHandler from '../../utils/cookieHandler'

import Button from '../form/Button'
import Input from '../form/Input'

import { IApiResponse } from '../../types/hooks/usefetch.types'
import { reducerCases } from '../../utils/constants'
import { useStateProvider } from '../../context/StateContext'

export default function AuthForm() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [{ }, dispatch] = useStateProvider()
    const navigate = useNavigate()

    const [response, isLoading, error, sendCredentials] = useFetch<IApiResponse>("POST", {
        url: AUTH_ROUTE,
        values: {
            username,
            password
        }
    })

    useEffect(() => {
        if (!isLoading && response) {
            if (response.status) {
                cookieHandler.set('token', response.data.userToken)
                dispatch({
                    type: reducerCases.SHOW_TOAST,
                    payload: {
                        type: 'success',
                        title: 'یه خبر خوب!',
                        message: response.message
                    }
                })
                navigate('/')
            } else {
                dispatch({
                    type: reducerCases.SHOW_TOAST,
                    payload: {
                        type: 'error',
                        title: 'برای اینکه!',
                        message: response.message || "مشکلی از سمت سرور پیش آمده است!"
                    }
                })
                clearForm()
            }
        } else if (!isLoading && error) {
            dispatch({
                type: reducerCases.SHOW_TOAST,
                payload: {
                    type: 'error',
                    title: 'برای اینکه!',
                    message: "مشکلی از سمت سرور پیش آمده است!"
                }
            })
        }
    }, [isLoading])

    const clearForm = () => {
        setUsername('')
        setPassword('')
    }

    const authHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendCredentials()
    }

    return (
        <>
            <form className="login">
                <Input
                    required
                    type='text'
                    label='نام کاربری'
                    state={username}
                    setState={setUsername}
                    placeholder='نام کاربری پیشگامان آسیا'
                />

                <Input
                    required
                    minLength={2}
                    type='password'
                    label='رمز عبور'
                    state={password}
                    setState={setPassword}
                    placeholder='رمز عبور پیشگامان آسیا'
                    className='pl-12'
                />

                <Button
                    variant='outlined'
                    loading={isLoading}
                    disabled={!username.length || password.length < 2}
                    label='ورود به پیشگامان آسیا'
                    onClick={authHandler}
                />
            </form>
        </>
    )
}