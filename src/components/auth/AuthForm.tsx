import { useContext, useEffect, useState } from 'react'
import Button from '../form/Button'
import { Input } from '../form/Input'

import { AUTH_ROUTE } from '../../api/apiRoutes'
import useFetch from '../../hooks/useFetch'
import cookieHandler from '../../utils/cookieHandler'

import { ToastContext, ToastContextType } from '../../context/ToastContext'
import { useNavigate } from 'react-router-dom'
import { IApiResponse } from '../../types/types'

export default function AuthForm() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { showToast } = useContext(ToastContext) as ToastContextType
    const navigate = useNavigate()

    const [response, isLoading, error, handlerApi] = useFetch<IApiResponse>("POST", {
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
                showToast({
                    type: 'success', 
                    title: 'یه خبر خوب!', 
                    message: response.message});
                navigate('/')
            } else {
                showToast({
                    type: 'error', 
                    title: 'برای اینکه!', 
                    message: response.message || "مشکلی از سمت سرور پیش آمده است!"});
                clearForm()
            }
        } else if (!isLoading && error) {
           showToast({type: 'error', title: 'میدونی چرا؟', message: "مشکلی از سمت سرور پیش آمده است!"});
        }
    }, [isLoading])

    const clearForm = () => {
        setUsername('')
        setPassword('')
    }

    const authHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handlerApi()
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