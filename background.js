'use strict'

function notify(msg) {
  console.log('background script received msg')
  browser.notifications.create({
    type: 'basic',
    iconUrl: browser.runtime.getURL('logo.svg'),
    title: '你要记住：',
    message: '目前最重要的事情——找到工作',
  })
}
browser.runtime.onMessage.addListener(notify)
