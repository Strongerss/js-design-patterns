/*
 * 访问一个聚合对象的内容而无需暴露它的内部表示
 * 为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作
 * 遍历的同时更改迭代器所在的集合结构可能会导致问题（比如C#的foreach里不允许修改item）
 * @Author: strong 
 * @Date: 2018-04-25 14:35:35 
 * @Last Modified by: strong
 * @Last Modified time: 2018-04-25 14:37:24
 */
const agg = (function() {
  let index = 0,
    data = [1, 2, 3, 4, 5],
    length = data.length

  return {
    next() {
      var element
      if (!this.hasNext()) {
        return null
      }
      element = data[index]
      index = index + 2
      return element
    },

    hasNext() {
      return index < length
    },

    rewind() {
      index = 0
    },

    current() {
      return data[index]
    }
  }
})()

while (agg.hasNext()) {
  console.log(agg.next());
}
