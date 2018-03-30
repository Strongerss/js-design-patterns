const singletonTester = (function(){

  function Singleton(args = {}) {
    this.name = 'SingletonTester'
    this.pointX = args.pointX || 6
    this.pointX = args.pointX || 10
  }

  let instance

  let _static = {
    name : 'SingletonTester',
    getInstance(args) {
      !instance && (instance = new Singleton(args))
      return instance
    }
  }
  return _static
}())

const singletonTest = singletonTester.getInstance({pointX: 5})
console.log(singletonTest.pointX)