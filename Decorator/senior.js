/* function ConcreteClass() {
  this.performTask = function () {
      this.preTask();
      console.log('doing something');
      this.postTask();
  };
}

function AbstractDecorator(decorated) {
  this.performTask = function () {
      decorated.performTask();
  };
}

function ConcreteDecoratorClass(decorated) {
  this.base = AbstractDecorator;
  this.base(decorated);

  decorated.preTask = function () {
      console.log('pre-calling..');
  };

  decorated.postTask = function () {
      console.log('post-calling..');
  };

}

var concrete = new ConcreteClass();
var decorator1 = new ConcreteDecoratorClass(concrete);
var decorator2 = new ConcreteDecoratorClass(decorator1);
concrete.performTask(); */
//decorator1.performTask();
//decorator2.performTask();


let tree = {}
tree.decorate = function() {
  console.log('make sure the tree won\'t fail')
}

tree.getDecorate = function(deco) {
  tree[deco].prototype = this
  return new tree[deco]
}

tree.RedBalls = function() {
  this.decorate = function() {
    this.RedBalls.prototype.decorate()
    console.log('Put on some red balls');
  }
}

tree.BlueBalls = function() {
  this.decorate = function() {
    this.BlueBalls.prototype.decorate()
    console.log('Add blue balls');
  }
}

tree.Angel = function() {
  this.decorate = function() {
    this.Angel.prototype.decorate()
    console.log('An angel on the top')
  }
}

tree = tree.getDecorate('BlueBalls')
tree = tree.getDecorate('Angel')
tree = tree.getDecorate('RedBalls')
tree.decorate()