import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    // flex-col + min-h-screen: footer sits at the bottom without absolute positioning
    <div className='flex min-h-screen flex-col bg-slate-950 text-slate-100'>
      <Navbar />
      <Navbar2 />

      <main className='mx-auto w-full max-w-5xl flex-1 px-6 py-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          {/* Dynamic route: :courseId is read with useParams() */}
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseId' element={<CourseDetail />} />

          {/* Nested routes: children render inside <Outlet /> in Product */}
          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
            <Route path='kids' element={<Kids />} />
          </Route>

          {/* Catch-all for unknown URLs */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App