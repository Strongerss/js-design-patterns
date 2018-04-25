function Event(name) {
  let handlers = []

  // 获取事件名称
  this.getName = () => {
    return name
  }

  // 向数组中加入handler
  this.addHandler = handler => {
    handlers.push(handler)
  }

  // 移除数组中的handler
  this.removeHander = handler => {
    for(let i=0; i< handlers.length; i++) {
      if(handlers[i] === handler) {
        handlers.splice(i, 1)
        break
      }
    }
  }

  // 循环执行handler
  this.fire = eventArgs => {
    handlers.forEach(h=>{
      h(eventArgs)
    })
  }
}

// 事件的订阅和发布
function EventAggregator() {
  let events = []

  function getEvent(eventName) {
    return $.grep(events, event=>{
      return event.getName() === eventName
    })[0]
  }

  this.publish = (eventName, eventArgs) => {
    let event = getEvent(eventName)
    if(!event) {
      event = new Event(eventName)
      events.push(event)
    }
    event.fire(eventArgs)
  }

  this.subscribe = (eventName, hander) => {
    let event = getEvent(eventName)
    if(!event) {
      event = new Event(eventName)
      events.push(event)
    }
    event.addHandler(hander)
  }

}

function Product(id, description) {
  this.getId = () => {
    return id
  }
  this.getDescription = () =>{
    return description
  }
}

function Cart(eventAggregator) {
  let items = []
  this.addItem = item =>{
    items.push(item)
    eventAggregator.publish('itemAdded', item)
  }
}

function CartController(cart, eventAggregator) {
  eventAggregator.subscribe('itemAdded', eventArgs=>{
    let newItem = $('<li></li>').html(eventArgs.getDescription()).attr('id-cart', eventArgs.getId()).appendTo('#cart')
  })

  eventAggregator.subscribe('productSelected', eventArgs=>{
    cart.addItem(eventArgs.product)
  })
}

function ProductRepository() {
  let products = [new Product(1, "Star Wars Lego Ship"),
  new Product(2, "Barbie Doll"),
  new Product(3, "Remote Control Airplane")];
  this.getProducts = () =>{
    return products
  }
}

function ProductController(eventAggregator, productRepository) {
  let products = productRepository.getProducts()

  function onProductSelected() {
    let productId = $(this).data('id')
    let product = products.filter(pro => {
      return pro.getId() === productId
    })[0]
    eventAggregator.publish('productSelected', {
      product: product
    })
  }

  products.map((product, index) => {

    /* return `<li id="${product.getId()}">${product.getDescription()}</li>` */

    $('<li></li>')
      .html(product.getDescription())
      .data('id', product.getId())
      .dblclick(onProductSelected)
      .appendTo('#products')
  })
  /* $('#products').html(contents) */
}

(function() {
  let eventAggregator = new EventAggregator(),
  cart = new Cart(eventAggregator),
  cartController = new CartController(cart, eventAggregator),
  productRepository = new ProductRepository(),
  productController = new ProductController(eventAggregator, productRepository)
}())

