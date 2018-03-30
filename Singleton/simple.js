const singleton = (function() {
  let instantiated
  
  // 初始化函数
  const _init = () => {
    return {
      publicMethod() {
        console.log('hello singleton')
      },
      publicProperty: 'test'
    }
  }

  return {
    getInstance() {
      !instantiated && (instantiated = _init())
      return instantiated
    }
  }
}())

singleton.getInstance().publicMethod()