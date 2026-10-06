import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='py-16 text-center'>
      <h1 className='text-5xl font-bold tracking-tight sm:text-6xl'>Learn React Routing</h1>
      <p className='mx-auto mt-5 max-w-xl text-lg text-slate-400'>
        A small project covering links, nested routes, dynamic params and
        programmatic navigation.
      </p>
      <div className='mt-8 flex justify-center gap-4'>
        <Link to='/courses' className='rounded bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400'>
          Browse courses
        </Link>
        <Link to='/product' className='rounded border border-slate-600 px-6 py-3 font-semibold hover:border-amber-400'>
          See nested routes
        </Link>
      </div>
    </section>
  )
}

export default Home
