/*
 * 策略模式
 * 策略模式定义了算法家族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化不会影响到使用算法的客户
 * @Author: strong 
 * @Date: 2018-04-23 09:45:31 
 * @Last Modified by: strong
 * @Last Modified time: 2018-04-23 10:24:27
 */
const validator = {
  // 所有可以的验证规则处理类存放的地方，后面会单独定义
  types: [],
  // 验证类型所对应的错误消息
  messages: [],
  // 需要使用的验证类型
  config: {},
  // 暴露的公开验证方法
  // 传入的参数是 key => value对
  validate(data) {
    let i, msg, type, checker, result_ok
    this.messages = []
    Object.keys(data).forEach((item, index) => {
      type = this.config[item]
      checker = this.types[type]
      if (type && checker) {
        result_ok = checker.validate(data[item])
        if (!result_ok) {
          msg = `Invalid value for *${item}*, ${checker.instructions}`
          this.messages.push(msg)
        }
      }
    })
    return this.hasErrors()
  },
  hasErrors() {
    return this.messages.length !== 0
  }
}

validator.types.isNumber = {
  validate(value) {
    return !isNaN(value)
  },
  instructions: '传入的值只能是合法的数字，例如：1, 3.14 or 2010'
}

validator.types.isAlphaNum = {
  validate(value) {
    return !/[^a-zA-Z0-9]/i.test(value)
  },
  instructions: '传入的值只能是字母和数字，不能包含特殊字符'
}

const data = {
  first_name: 'Tom',
  last_name: 'Xu',
  age: 'unknown',
  username: 'TomXu'
}

validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum'
}

validator.validate(data)

if (validator.hasErrors()) {
  console.log(validator.messages.join('\n'))
}
