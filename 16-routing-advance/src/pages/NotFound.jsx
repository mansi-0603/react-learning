import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
  const { pathname } = useLocation()

  return (
    <section className='py-16 text-center'>
      <h1 className='text-6xl font-bold text-red-500'>404</h1>
      <p className='mt-3 text-xl'>Page not found</p>
      <p className='mt-1 text-slate-400'>
        <code className='text-cyan-400'>{pathname}</code> doesn't match any route.
      </p>
      <Link to='/' className='mt-8 inline-block rounded bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400'>
        Go to home
      </Link>
    </section>
  )
}

export default NotFound
