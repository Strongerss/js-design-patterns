function Universe() {
  if(typeof Universe.instance === 'Object') {
    return Universe.instance
  }
  this.start_time = 0
  this.bang = 'big'
  Universe.instance = this
}

const un1 = new Universe()
const un2 = new Universe()
console.log(un1 === un2)