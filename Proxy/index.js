const girl = function(name) {
  this.name = name
}

const dudu = function(girl) {
  this.girl = girl
  this.sendGift = gift => {
    console.log(`Hi${girl.name},dudu送你一个礼物:${gift}`)
  }
}

const proxyStrong = function(girl) {
  this.girl = girl
  this.sendGift = gift => {
    new dudu(girl).sendGift(gift)
  }
}

const proxy = new proxyStrong(new girl('奶茶妹妹'))
proxy.sendGift('999朵玫瑰')
