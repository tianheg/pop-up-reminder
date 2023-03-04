'use strict'

function notifyExtension(e) {
  let target = e.target
  while ((target.tagName != 'A' || !target.href) && target.parentNode) {
    target = target.parentNode
  }
  // what is its meaning
  if (target.tagName != 'A') return

  console.log('content script sending message')
  browser.runtime.sendMessage({ url: target.href })
}

window.addEventListener('click', notifyExtension)
