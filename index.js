const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const win = arr.find(record => record.result === 'W')
  return (win ? win.year : win)
}
