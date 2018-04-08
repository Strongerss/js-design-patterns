function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.output= function () {
      return this.model + "走了" + this.miles + "公里";
  };
}

/* const Strong = Car('Strong', 2009, 2000)
console.log(Strong.output());
console.log(global.output()); */
const o = new Object()
Car.call(o, 'Strong', 2010, 5000)
console.log(o.output());

/* var tom= new Car("大叔", 2009, 20000);
var dudu= new Car("Dudu", 2010, 5000);

console.log(tom.output());
console.log(dudu.output()); */

/* function formatCar() {
  return this.model + "走了" + this.miles + "公里";
}

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.output= formatCar;
}

var tom= new Car("大叔", 2009, 20000);
var dudu= new Car("Dudu", 2010, 5000);

console.log(tom.output());
console.log(dudu.output()); */


/* function Car(model, year, miles) {
  this.model = model
  this.year = year
  this.miles = miles
}

Car.prototype.output = function() {
  return `${this.model}走了${this.miles}公里`
}

console.log(new Car('Strong', 2009, 200000).output()); */