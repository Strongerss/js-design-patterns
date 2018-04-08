/* function Car(model, year, miles){
  if(!(this instanceof Car)){
    return new Car(model, year, miles)
  }
  this.model = model
  this.year = year
  this.miles = miles
  this.output = function() {
    return `${this.model}走了${this.miles}公里`
  }
}

const tom = new Car("tom", 2009, 5000)
const Strong = new Car("Strong", 2010, 20000)

console.log(tom.output());
console.log(Strong.output()); */


/* let greet = "Hello there"
greet.split(' ')[0]
greet.smile = true
console.log(greet.smile); */

let greet = new String("Hello there")
greet.split(' ')[0]
greet.smile = true
console.log(greet.smile);
