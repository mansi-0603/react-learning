import React from 'react'

const topics = [
  ['Link / NavLink', 'Navigate without a page reload; NavLink knows which route is active.'],
  ['Nested routes & Outlet', 'Child routes render inside their parent layout.'],
  ['Dynamic params', 'Read values like :courseId with useParams().'],
  ['useNavigate', 'Change routes from code: go home, back or forward.'],
  ['Wildcard route', 'path="*" catches every URL that has no match (404).'],
]

const About = () => {
  return (
    <section>
      <h1 className='text-4xl font-bold'>About this project</h1>
      <p className='mt-3 text-slate-400'>What this app demonstrates:</p>
      <ul className='mt-6 space-y-4'>
        {topics.map(([title, text]) => (
          <li key={title} className='rounded-lg border border-slate-800 bg-slate-900 p-4'>
            <h3 className='font-semibold text-amber-400'>{title}</h3>
            <p className='text-slate-300'>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
