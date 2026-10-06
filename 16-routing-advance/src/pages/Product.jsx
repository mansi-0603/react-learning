import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const tabs = [
  { to: '/product/men', label: 'Men' },
  { to: '/product/women', label: 'Women' },
  { to: '/product/kids', label: 'Kids' },
]

const Product = () => {
  return (
    <section>
      <h1 className='text-4xl font-bold'>Products</h1>

      <div className='mt-6 flex gap-3 border-b border-slate-800 pb-3'>
        {tabs.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `rounded px-4 py-2 text-lg font-semibold transition ${
                isActive ? 'bg-amber-500 text-slate-900' : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* The matched child route (Men / Women / Kids) renders here */}
      <div className='mt-6'>
        <Outlet />
      </div>
    </section>
  )
}

export default Product
