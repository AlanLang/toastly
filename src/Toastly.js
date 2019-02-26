const Message = require('./Message');

const Toastly = function (element, opts) {
  console.log(1)
  for(const a of "alan"){
    console.log(a)
  }
  const owner = this;

  owner.init();
};

Toastly.prototype = {
  init:function(){
    const wrapper = document.querySelector('body')
    const message = new Message()
    wrapper.innerHTML = message.render()
  }
}

module.exports = Toastly;