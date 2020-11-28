import mediumZoom from 'medium-zoom'
import axios from 'axios'

const closeMessageButton = document.querySelector('.message .close')
const socialButtons = document.querySelectorAll('a.ui.button.basic')

// Image Zoom Effect
mediumZoom('.image-zoom', {
  margin: 150,
  scrollOffset: 60
})

// Close Message
if (closeMessageButton)
  closeMessageButton.addEventListener(
    'click',
    () => (window.location.href = '/')
  )

// Count Buttons
socialButtons.forEach(btn => {
  btn.onclick = () => {
    axios.post('http://localhost:3000/api/v1/counts', {
      name: btn.dataset.name
    })
  }
})
