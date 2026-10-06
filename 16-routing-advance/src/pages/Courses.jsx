import React from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

const Courses = () => {
  return (
    <section>
      <h1 className='text-4xl font-bold'>Courses</h1>
      <p className='mt-2 text-slate-400'>Pick a course to open its detail page.</p>

      <div className='mt-8 grid gap-5 sm:grid-cols-2'>
        {courses.map((course) => (
          // Each link builds a URL like /courses/react-basics
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className='rounded-lg border border-slate-800 bg-slate-900 p-5 transition hover:border-amber-400'
          >
            <h3 className='text-xl font-semibold'>{course.title}</h3>
            <p className='mt-1 text-sm text-slate-400'>{course.level} · {course.duration}</p>
            <p className='mt-3 text-slate-300'>{course.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Courses
