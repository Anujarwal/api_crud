import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container-fluid">
      <Form />
      <ListGroup />
    </div>
    </>
  )
}

export default App