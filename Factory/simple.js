/* const Car = (function() {
  const Car = function (model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles
  }
  return function(model, year, miles) {
    return new Car(model, year, miles)
  }
}())

const tom = new Car("tom", 2009, 20000)
const Strong = new Car("Strong", 1992, 50000)
 */

 const productManager = {}
 productManager.createrProductA = function() {
   console.log('Product A');
 }
 productManager.createrProductB = function() {
   console.log('Product B');
 }
 productManager.factory = function(type){
   return new productManager[type]
 }

 productManager.factory('createrProductA')