import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-cyan-800 bg-cyan-900 py-5 text-center text-sm text-slate-200'>
      © {new Date().getFullYear()} Sneha · React Router practice project
    </footer>
  )
}

export default Footer
