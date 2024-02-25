import { Link } from 'react-router-dom'
import '../styles//pages/not-found.scss'

export default function NotFoundPage() {
  return (
    <div className='not-found'>
      <p>این صفحه وجود ندارد!</p>
      <Link to={"/"}>رفتن به صفحه اصلی</Link>
    </div>
  )
}