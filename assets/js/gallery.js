document.addEventListener('DOMContentLoaded', () => {
  initGallery()
})

let currentModalIndex = 0
let allGalleryItems = []

function initGallery() {
  // Get all gallery items
  allGalleryItems = document.querySelectorAll('.gallery-item')

  // Close modal when clicking outside the image
  document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
      closeModal()
    }
  })

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageModal')
    if (modal.style.display === 'block') {
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') closeModal()
    }
  })
}

function openModal(element) {
  const modal = document.getElementById('imageModal')
  const modalImage = document.getElementById('modalImage')
  const modalTitle = document.getElementById('modalTitle')

  // Get the image and title from the clicked item
  const img = element.querySelector('img')
  const title = element.querySelector('.gallery-item-title')
  const description = element.querySelector('.gallery-item-description')

  // Set modal content
  modalImage.src = img.src
  modalImage.alt = img.alt
  modalTitle.textContent = title ? title.textContent : 'Gallery Item'

  // Find current index
  currentModalIndex = Array.from(allGalleryItems).indexOf(element)

  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  const modal = document.getElementById('imageModal')
  modal.style.display = 'none'
  document.body.style.overflow = 'auto'
}

function prevImage() {
  currentModalIndex--
  if (currentModalIndex < 0) {
    currentModalIndex = allGalleryItems.length - 1
  }
  updateModalImage()
}

function nextImage() {
  currentModalIndex++
  if (currentModalIndex >= allGalleryItems.length) {
    currentModalIndex = 0
  }
  updateModalImage()
}

function updateModalImage() {
  if (allGalleryItems.length === 0) return

  const currentItem = allGalleryItems[currentModalIndex]
  const img = currentItem.querySelector('img')
  const title = currentItem.querySelector('.gallery-item-title')

  const modalImage = document.getElementById('modalImage')
  const modalTitle = document.getElementById('modalTitle')

  modalImage.src = img.src
  modalImage.alt = img.alt
  modalTitle.textContent = title ? title.textContent : 'Gallery Item'

  // Add a smooth fade effect
  modalImage.style.opacity = '0.5'
  setTimeout(() => {
    modalImage.style.opacity = '1'
  }, 50)
}

// Add smooth transition to modal image
const style = document.createElement('style')
style.textContent = `
  .modal-image {
    transition: opacity 0.3s ease;
  }
`
document.head.appendChild(style)
