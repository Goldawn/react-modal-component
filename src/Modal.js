import React from 'react'
import './Modal.css'

// component Modal 
const Modal = ({children, handleClose, isOpen, allowEscape})=> {

  // close on escape key
  React.useEffect(() => {

    if (!allowEscape) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [handleClose])


  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default Modal