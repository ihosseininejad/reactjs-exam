import { useContext, useEffect, useState, FormEvent } from 'react'
import Button from '../form/Button'
import { Input } from '../form/Input'

import { AUTH_ROUTE } from '../../api/apiRoutes'
import useFetch from '../../hooks/useFetch'
import CookieHandler from '../../utils/CookieHandler'

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
                CookieHandler.set('token', response.data.userToken)
                showToast('success', 'یه خبر خوب!', response.message);
                navigate('/')
            } else {
                showToast('error', 'میدونی چرا؟', response.message || "مشکلی از سمت سرور پیش آمده است!");
                clearForm()
            }
        } else if(!isLoading && error){
            showToast('error', 'میدونی چرا؟', "مشکلی از سمت سرور پیش آمده است!");
        }
    }, [isLoading])

    const clearForm = () => {
        setUsername('')
        setPassword('')
    }

    const authHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handlerApi()
    }

    return (
        <>
            <form className="login">
                <Input required type='text' label='نام کاربری' state={username} setState={setUsername} placeholder='نام کاربری پیشگامان آسیا' />
                <Input required minLength={2} type='password' label='رمز عبور' state={password} setState={setPassword} placeholder='رمز عبور پیشگامان آسیا' />

                <Button loading={isLoading} disabled={!username.length || password.length < 2} label='ورود به پیشگامان آسیا' onClick={authHandler} />
            </form>
            <div className="description">
                <h3>پیشگامان آسیا</h3>
            </div>
        </>
    )
}