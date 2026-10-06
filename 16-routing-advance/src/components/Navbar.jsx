import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/product', label: 'Product' },
]

const Navbar = () => {
  return (
    <header className='sticky top-0 z-10 border-b border-cyan-800 bg-cyan-900/95 backdrop-blur'>
      <nav className='mx-auto flex max-w-5xl items-center justify-between px-6 py-4'>
        <Link to='/' className='text-2xl font-bold tracking-tight'>
          Sheryians
        </Link>

        <div className='flex gap-8'>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'} // "/" would otherwise match every route
              className={({ isActive }) =>
                `text-lg font-medium transition-colors hover:text-amber-400 ${
                  isActive ? 'text-amber-400 underline underline-offset-8' : 'text-slate-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
