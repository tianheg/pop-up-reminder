let notification = 'notification'

let INTERVAL = 20.0

browser.alarms.create('', { periodInMinutes: INTERVAL })

browser.alarms.onAlarm.addListener((alarm) => {
  browser.notifications
    .create(notification, {
      type: 'basic',
      iconUrl: browser.runtime.getURL('logo.png'),
      title: '你要记住：',
      message: '目前最重要的事情——找到工作',
    })
    .then(() => {
      console.log('created')
    })
})

browser.action.onClicked.addListener(() => {
  let clearing = browser.notifications.clear(notification)
  clearing.then(() => {
    console.log('cleared')
  })
})
