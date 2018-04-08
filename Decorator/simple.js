function MacBook() {
  this.cost = function() {
    return 1000
  }
}

function Memory(macbook) {
  this.cost = function() {
    return macbook.cost() + 75
  }
}

function BlurayDrive(macbook) {
  this.cost = function() {
    return macbook.cost() + 300
  }
}

function Insurance(macbook) {
  this.cost = function() {
    return macbook.cost() + 250
  }
}

const myBacbook = new Insurance(new BlurayDrive(new Memory(new MacBook())))
console.log(myBacbook.cost());