import Message from './Message'
const Toastly = function (element, opts) {
  console.log(1)
  const owner = this;
  console.log('%cMessage: ','color: MidnightBlue; background: Aquamarine;',Message);
  owner.init();
};

Toastly.prototype = {
  init:function(){
    console.log(123)
  }
}

module.exports = Toastly;
//export default Toastly