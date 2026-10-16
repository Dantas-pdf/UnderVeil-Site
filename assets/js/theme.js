// Purple on dark is the default. The inline snippet at the top of each page's <body>
// applies saved preferences before first paint; this file wires up the toggle buttons.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle')
  const colorToggle = document.getElementById('color-theme-toggle')
  const body = document.body

  function readPref(key) {
    try {
      return localStorage.getItem(key)
    } catch (e) {
      return null
    }
  }

  function savePref(key, value) {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      // Storage unavailable (private mode, blocked): the choice lasts for this page only
    }
  }

  // Determine initial theme: saved preference or system preference
  const saved = readPref('theme')
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
  if (saved === 'light' || (!saved && prefersLight)) {
    body.classList.add('light-theme')
  }

  // Gold is opt-in; anything else stays on the default purple
  if (readPref('colorTheme') === 'yellow') {
    body.classList.add('color-theme-gold')
  }

  function updateButton() {
    if (!toggle) return
    const isLight = body.classList.contains('light-theme')
    const label = isLight ? 'Switch to dark mode' : 'Switch to light mode'
    toggle.innerHTML = `<i class="fas ${isLight ? 'fa-moon' : 'fa-sun'}" aria-hidden="true"></i>`
    toggle.title = label
    toggle.setAttribute('aria-label', label)
  }

  function updateColorButton() {
    if (!colorToggle) return
    const isGold = body.classList.contains('color-theme-gold')
    const label = isGold ? 'Switch to purple theme' : 'Switch to gold theme'
    // The icon takes the current accent: only one accent colour is ever on screen
    colorToggle.innerHTML = '<i class="fas fa-palette" aria-hidden="true"></i>'
    colorToggle.title = label
    colorToggle.setAttribute('aria-label', label)
  }

  updateButton()
  updateColorButton()

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-theme')
      savePref('theme', isLight ? 'light' : 'dark')
      updateButton()
    })
  }

  if (colorToggle) {
    colorToggle.addEventListener('click', () => {
      const isGold = body.classList.toggle('color-theme-gold')
      savePref('colorTheme', isGold ? 'yellow' : 'purple')
      updateColorButton()
    })
  }

  body.classList.add('ready')
})
