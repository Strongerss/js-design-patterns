let strongModule = (function() {
  let my = {},
    privateName = 'Strong'
  function _privateAddTopic(data) {
    console.log(`data:${data}`)
  }
  my.name = privateName
  my.AddTopic = (data) => {
    _privateAddTopic(data)
  }
  return my
}())

console.log(`strongModule.name:${strongModule.name}`)
strongModule.AddTopic('this is data')
