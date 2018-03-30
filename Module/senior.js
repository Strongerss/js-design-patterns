/* const strongModule = (function() {
  let my = {}
  my.addPhoto = () => {
    console.log(`addPhoto`)
  }
  return my
})()(
  (function(my) {
    let oldAddPhotoMethod = my.addPhoto
    my.addPhoto = () => {
      console.log(`newAddPhoto`)
    }
    return my
  })(strongModule || {})
)

strongModule.oldAddPhotoMethod()
strongModule.addPhoto()

const strongModule = (function(old) {
  let my = {},
    key
  for(key in old) {
    if(old.hasOwnProperty(key)) {
      my[key] = old[key]
    }
  }
}())


 */

var blogModule = (function (my) {
  var _private = my._private = my._private || {},
      
      _seal = my._seal = my._seal || function () {
          delete my._private;
          delete my._seal;
          delete my._unseal;
          console.log('locked');
      },
      
      _unseal = my._unseal = my._unseal || function () {
          my._private = _private;
          my._seal = _seal;
          my._unseal = _unseal;
      };
      
  return my;
} (blogModule || {}));

console.log(blogModule._private)
blogModule._unseal()
blogModule._seal()
blogModule._unseal()
console.log(blogModule._private)