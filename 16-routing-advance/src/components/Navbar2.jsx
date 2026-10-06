import React from 'react'
import { useNavigate } from 'react-router-dom'

const buttonStyle =
  'cursor-pointer rounded bg-amber-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-amber-400 active:scale-95'

const Navbar2 = () => {
  // useNavigate lets us change the route from code (e.g. inside onClick)
  const navigate = useNavigate()

  return (
    <div className='border-b border-cyan-900 bg-cyan-800'>
      <div className='mx-auto flex max-w-5xl gap-3 px-6 py-3'>
        <button onClick={() => navigate('/')} className={buttonStyle}>
          Home
        </button>
        <button onClick={() => navigate(-1)} className={buttonStyle}>
          Back
        </button>
        <button onClick={() => navigate(1)} className={buttonStyle}>
          Forward
        </button>
      </div>
    </div>
  )
}

export default Navbar2
