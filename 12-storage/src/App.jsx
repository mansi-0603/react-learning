import React from 'react'

const App = () => {

  const user = {
    username: 'Sarthak',
    age: 18,
    city: 'Bhopal'
  }


  // =====================================================
  // LOCAL STORAGE
  // =====================================================

  // 1. setItem() → Store data
  localStorage.setItem('username', 'Sarthak')
  localStorage.setItem('age', '18')

  // 2. getItem() → Get data
  const username = localStorage.getItem('username')
  const age = localStorage.getItem('age')

  console.log('Local Username:', username)
  console.log('Local Age:', age)


  // 3. Store Object → JSON.stringify()
  localStorage.setItem('user', JSON.stringify(user))

  // 4. Get Object → JSON.parse()
  const localUser = JSON.parse(localStorage.getItem('user'))

  console.log('Local User:', localUser)
  console.log('Local Username:', localUser.username)
  console.log('Local Age:', localUser.age)
  console.log('Local City:', localUser.city)


  // 5. Update data
  const updatedUser = {
    ...localUser,
    age: 19
  }

  localStorage.setItem('user', JSON.stringify(updatedUser))

  console.log(
    'Updated Local User:',
    JSON.parse(localStorage.getItem('user'))
  )


  // 6. removeItem() → Remove one particular item
  // localStorage.removeItem('age')


  // 7. clear() → Remove everything
  // localStorage.clear()



  // =====================================================
  // SESSION STORAGE
  // =====================================================

  // 1. setItem() → Store data
  sessionStorage.setItem('username', 'Sarthak')
  sessionStorage.setItem('age', '18')

  // 2. getItem() → Get data
  const sessionUsername = sessionStorage.getItem('username')
  const sessionAge = sessionStorage.getItem('age')

  console.log('Session Username:', sessionUsername)
  console.log('Session Age:', sessionAge)


  // 3. Store Object → JSON.stringify()
  sessionStorage.setItem('user', JSON.stringify(user))

  // 4. Get Object → JSON.parse()
  const sessionUser = JSON.parse(
    sessionStorage.getItem('user')
  )

  console.log('Session User:', sessionUser)
  console.log('Session Username:', sessionUser.username)
  console.log('Session Age:', sessionUser.age)
  console.log('Session City:', sessionUser.city)


  // 5. Update data
  const updatedSessionUser = {
    ...sessionUser,
    city: 'Delhi'
  }

  sessionStorage.setItem(
    'user',
    JSON.stringify(updatedSessionUser)
  )

  console.log(
    'Updated Session User:',
    JSON.parse(sessionStorage.getItem('user'))
  )


  // 6. removeItem() → Remove one particular item
  // sessionStorage.removeItem('age')


  // 7. clear() → Remove everything
  // sessionStorage.clear()


  return (
    <div>
      <h1>Local Storage & Session Storage</h1>
    </div>
  )
}

export default App