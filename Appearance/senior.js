const addMyEvent = (function(el, ev, fn) {
  if(el.addEventListener) {
    return function(el, ev, fn) {
      el.addEventListener(ev, fn, false)
    }
  } else if(el.attachEvent) {
    return function(el, ev, fn) {
      el.attachEvent(`on${ev}`, fn)
    }
  } else {
    return function(el, ev, fn) {
      el[`on${ev}`, fn]
    }
  }
}())