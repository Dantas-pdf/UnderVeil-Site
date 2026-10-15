document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle')
  const colorToggle = document.getElementById('color-theme-toggle')
  const body = document.body

  // Determine initial theme: saved preference or system preference
  const saved = localStorage.getItem('theme')
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
  if (saved === 'light' || (!saved && prefersLight)) {
    body.classList.add('light-theme')
  }

  // Load saved color theme preference
  const savedColorTheme = localStorage.getItem('colorTheme')
  if (savedColorTheme === 'purple') {
    body.classList.add('color-theme-purple')
  }

  function updateButton() {
    if (!toggle) return
    if (body.classList.contains('light-theme')) {
      toggle.innerHTML = '<i class="fas fa-moon"></i>'
      toggle.title = 'Switch to dark mode'
    } else {
      toggle.innerHTML = '<i class="fas fa-sun"></i>'
      toggle.title = 'Switch to light mode'
    }
  }

  function updateColorButton() {
    if (!colorToggle) return
    if (body.classList.contains('color-theme-purple')) {
      colorToggle.innerHTML = '<i class="fas fa-palette" style="color: #d946ef;"></i>'
      colorToggle.title = 'Switch to yellow theme'
    } else {
      colorToggle.innerHTML = '<i class="fas fa-palette" style="color: #ffd700;"></i>'
      colorToggle.title = 'Switch to purple theme'
    }
  }

  updateButton()
  updateColorButton()

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-theme')
      localStorage.setItem('theme', isLight ? 'light' : 'dark')
      updateButton()
    })
  }

  if (colorToggle) {
    colorToggle.addEventListener('click', () => {
      const isPurple = body.classList.toggle('color-theme-purple')
      localStorage.setItem('colorTheme', isPurple ? 'purple' : 'yellow')
      updateColorButton()
    })
  }

  // Show the page now that styles are loaded
  body.classList.add('ready')
})
