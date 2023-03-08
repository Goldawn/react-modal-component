import './App.css'
import { useState } from 'react'
import { Modal } from './lib'
// import Modal from '../dist/index'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} handleClose={handleClose} allowEscape>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  )
}

export default App