'use strict';
const Toastly = function (element, opts) {
  console.log(1)
  const owner = this;

  owner.init();
};

Toastly.prototype = {
  init:function(){
    console.log(123)
  }
}

module.exports = Toastly;