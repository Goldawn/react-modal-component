# React modal
## Get started

```javascript
// Usecase 
import Modal from 'react-modal-component'
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  
  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  )
}
```
