import { useEffect } from 'react'
import useToken from '../hooks/useToken'
import { useNavigate } from 'react-router-dom'

import AuthForm from '../components/auth/AuthForm'
import BackgroundLayers from '../components/auth/BackgroundLayers'
import Waves from '../components/auth/Waves'
import '../styles/pages/auth.scss'

export default function AuthPage() {
  const token = useToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="content">
            <AuthForm />
          </div>
          <BackgroundLayers />
        </div>
      </div>
      <Waves />
    </>
  )
}