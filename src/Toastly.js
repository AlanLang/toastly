'use strict';
const Toastly = function (element, opts) {
  const owner = this;

  owner.init();
};

Toastly.prototype = {
  init:function(){
    console.log(123)
  }
}

export default Toastly;