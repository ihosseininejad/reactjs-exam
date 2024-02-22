import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/not-found.scss'
type Props = {}

export default function NotFoundPage({}: Props) {
  return (
    <div className='not-found'>
      این صفحه وجود ندارد!
      <Link to={"/"}>رفتن به صفحه اصلی</Link>
    </div>
  )
}