import { useEffect } from 'react'
import AuthForm from '../components/auth/AuthForm'
import useToken from '../hooks/useToken'
import { useNavigate } from 'react-router-dom'
import BackgroundLayers from '../components/auth/BackgroundLayers'
import '../styles/auth-page.scss'

export default function AuthPage() {
  const token = useToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [])

  return (
    <div className="container">
      <div className="screen">
        <div className="content">
          <AuthForm />
        </div>
        <BackgroundLayers />
      </div>
    </div>
  )
}