function Observer() {
  this.fns = []
}

Observer.prototype = {
  subscribe(fn) {
    this.fns.push(fn)
  },
  unsubscribe(fn) {
    this.fns = this.fns.filter(el => {
      if (el !== fn) {
        return el
      }
    })
  },
  update(o, thisObj) {
    const scope = thisObj || window
    this.fns.forEach(fn => {
      fn.call(scope, o)
    })
  }
}

const o = new Observer()

const f1 = data => {
  console.log(`Strong${data},赶紧干活了`)
}

const f2 = data => {
  console.log(`Strong${data},找他加点工资去`)
}

o.subscribe(f1)
o.subscribe(f2)

o.update('Strong回来了')
