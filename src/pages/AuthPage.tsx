import { useEffect } from 'react'
import AuthForm from '../components/AuthForm'
import '../styles/auth/auth-page.scss'
import useToken from '../hooks/useToken'
import { useNavigate } from 'react-router-dom'

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
        <div className="background">
          <span className="background-shape shape4"></span>
          <span className="background-shape shape3"></span>
          <span className="background-shape shape2"></span>
          <span className="background-shape shape1"></span>
        </div>
      </div>
    </div>
  )
}