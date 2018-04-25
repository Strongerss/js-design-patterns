const CarManager = (function() {
  return {
    // 请求信息
    requestInfo(model, id) {
      return `The information for ${model} with ID ${id} is foobar`
    },

    // 购买汽车
    buyVehicle(model, id) {
      return `You have successfully purchased Item ${id}, a ${model}`
    },

    // 组织view
    arrangeViewing(model, id) {
      return `You have successfully booked a viewing of ${model}, ${id}`
    },

    execute(command) {
      return CarManager[command.request](command.model, command.carId)
    }
  }
})()

console.log(CarManager.execute({
  request: 'arrangeViewing',
  model: 'Ferrari',
  carID: '145523'
}))
