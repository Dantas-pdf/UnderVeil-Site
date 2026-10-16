// Where messages go. There's no team inbox yet, so this is empty and the form
// copies the message for pasting into an itch.io comment. Set it to a real
// address and the form opens the visitor's email app instead.
const CONTACT_EMAIL = ''

const MESSAGE_LIMIT = 3000

const BUG_PROMPT = [
  'What happened, and what did you expect?',
  'Steps that lead to it:',
  'Game version:',
  'Windows version and PC specs:',
].join('\n')

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form')
  if (!form) return

  const button = document.getElementById('contact-submit')
  const status = document.getElementById('form-status')
  const message = document.getElementById('message')
  const topic = document.getElementById('topic')
  const counter = document.getElementById('message-count')
  const modeNote = document.getElementById('form-mode-note')
  const itchLink = document.querySelector('[data-itch-link]')
  const itchUrl = itchLink ? itchLink.href : null

  // The button is a plain button in the HTML so nothing is submitted without
  // JavaScript; from here on it submits the form and native validation runs.
  button.type = 'submit'

  if (CONTACT_EMAIL) {
    button.innerHTML = '<i class="fas fa-envelope" aria-hidden="true"></i> Open in my email app'
    modeNote.textContent = `This opens your email app with your message filled in, addressed to ${CONTACT_EMAIL}. Nothing is sent until you press send there.`
  }

  function updateCounter() {
    counter.textContent = `${message.value.length.toLocaleString()} / ${MESSAGE_LIMIT.toLocaleString()} characters`
  }

  function updatePrompt() {
    message.placeholder = topic.value === 'Bug report' ? BUG_PROMPT : ''
  }

  message.addEventListener('input', updateCounter)
  topic.addEventListener('change', updatePrompt)
  updateCounter()
  updatePrompt()

  function setStatus(kind, html) {
    status.className = `form-status form-status-${kind}`
    status.innerHTML = html
  }

  function itchSentence() {
    return itchUrl
      ? `paste it into a comment on <a href="${itchUrl}" target="_blank" rel="noopener noreferrer">our itch.io page<span class="visually-hidden"> (opens in a new tab)</span></a>`
      : 'paste it into a comment on our itch.io page'
  }

  function composed() {
    const name = form.elements.name.value.trim()
    const body = message.value.trim()
    return { subject: `[${topic.value}] UnderVeil`, body, signed: name ? `${body}\n\n— ${name}` : body }
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        // Some browsers hold the request behind a permission prompt; don't wait forever
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1500))
        await Promise.race([navigator.clipboard.writeText(text), timeout])
        return true
      } catch (e) {
        // Fall through to the older copy method
      }
    }
    const scratch = document.createElement('textarea')
    scratch.value = text
    scratch.setAttribute('readonly', '')
    scratch.style.position = 'fixed'
    scratch.style.opacity = '0'
    document.body.appendChild(scratch)
    scratch.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch (e) {
      ok = false
    }
    scratch.remove()
    return ok
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const { subject, body, signed } = composed()

    // `required` accepts a message of only spaces; catch that here
    if (!body) {
      setStatus('error', 'Your message is empty. Write a few words first.')
      message.focus()
      return
    }

    if (CONTACT_EMAIL) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(signed)}`
      setStatus('info', `Your email app should now show the message. Nothing is sent until you press send there. Didn't open? Write to <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> directly.`)
      return
    }

    const copied = await copyText(`${subject}\n\n${signed}`)
    if (copied) {
      setStatus('success', `<i class="fas fa-check" aria-hidden="true"></i> Copied. Now ${itchSentence()}.`)
    } else {
      setStatus('error', `Couldn't copy automatically. Select your message above, copy it, then ${itchSentence()}.`)
      message.focus()
      message.select()
    }
  })
})
