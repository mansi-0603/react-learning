import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'

// Renamed from "Courses": the component name should match the file
const CourseDetail = () => {
  // :courseId from the route path becomes a key on this object
  const { courseId } = useParams()
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <section>
        <h1 className='text-3xl font-bold text-red-500'>Course not found</h1>
        <p className='mt-2 text-slate-400'>No course matches "{courseId}".</p>
        <Link to='/courses' className='mt-6 inline-block text-amber-400 underline'>
          Back to all courses
        </Link>
      </section>
    )
  }

  return (
    <section>
      <Link to='/courses' className='text-sm text-amber-400 hover:underline'>
        ← All courses
      </Link>
      <h1 className='mt-3 text-4xl font-bold'>{course.title}</h1>
      <p className='mt-2 text-slate-400'>{course.level} · {course.duration}</p>
      <p className='mt-6 max-w-2xl text-lg text-slate-300'>{course.description}</p>
      <p className='mt-6 text-sm text-slate-500'>
        URL param: <code className='text-cyan-400'>courseId = {courseId}</code>
      </p>
    </section>
  )
}

export default CourseDetail
