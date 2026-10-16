// Gallery lightbox. Each image is a link to the full picture, so the page works
// without JavaScript; with it, links open in a <dialog> that steps through the
// images of the same section.
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('lightbox')
  if (!dialog || typeof dialog.showModal !== 'function') return

  const stage = dialog.querySelector('.lightbox-stage')
  // The image element is created here so the page never ships an empty <img>
  const image = document.createElement('img')
  image.className = 'lightbox-image'
  image.alt = ''
  stage.insertBefore(image, dialog.querySelector('.lightbox-next'))
  const titleEl = dialog.querySelector('.lightbox-title')
  const descriptionEl = dialog.querySelector('.lightbox-description')
  const countEl = dialog.querySelector('.lightbox-count')

  let items = []
  let index = 0
  let opener = null

  function show(i) {
    index = (i + items.length) % items.length
    const item = items[index]
    const img = item.querySelector('img')
    image.src = item.querySelector('.gallery-link').href
    image.alt = img.alt
    titleEl.textContent = item.querySelector('.gallery-item-title').textContent
    descriptionEl.textContent = item.querySelector('.gallery-item-description').textContent
    countEl.textContent = `${index + 1} / ${items.length}`
  }

  function open(link) {
    const item = link.closest('.gallery-item')
    const section = item.closest('.gallery-section')
    items = Array.from(section.querySelectorAll('.gallery-item'))
    opener = link
    show(items.indexOf(item))
    dialog.classList.toggle('lightbox-single', items.length < 2)
    document.body.classList.add('lightbox-open')
    dialog.showModal()
  }

  document.querySelectorAll('.gallery-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      open(link)
    })
  })

  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close())
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(index - 1))
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(index + 1))

  // Clicking the dark area around the image closes the lightbox
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || e.target === stage) dialog.close()
  })

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      show(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      show(index + 1)
    }
  })

  // Swipe between images on touch screens
  let touchX = null
  let touchY = null
  stage.addEventListener('touchstart', (e) => {
    touchX = e.touches[0].clientX
    touchY = e.touches[0].clientY
  }, { passive: true })
  stage.addEventListener('touchend', (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    const dy = e.changedTouches[0].clientY - touchY
    touchX = null
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    show(dx < 0 ? index + 1 : index - 1)
  })

  // Esc closes natively; either way, restore scrolling and focus
  dialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open')
    image.removeAttribute('src')
    if (opener) opener.focus()
  })
})
