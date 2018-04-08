let page = page || {}
page.dom = page.dom || {}

// 子函数：处理文本
page.dom.Text = function() {
  this.insert = function(where) {
    const txt = document.createTextNode(this.url)
    where.appildChild(txt)
  }
}

// 子函数：处理链接
page.dom.Link = function() {
  this.insert = function(where) {
    const link = document.createElement('a')
    link.href = this.url
    link.appendChild(document.createTextNode(this.url))
    where.appildChild(link)
  }
}

// 子函数：处理图片
page.dom.Image = function() {
  this.insert = function(where) {
    const image = document.createElement('img')
    image.src = this.url
    where.appendChild(image)
  }
}

page.dom.factory = function (type) {
  return new page.dom[type]
}

const o = page.dom.factory('Link')
o.url = 'http://www.baidu.com'
o.insert(document.body)

