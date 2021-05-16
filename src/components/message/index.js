import Message from "./Message";
import Vue from "vue";
const $message = (options) => {
  const MessageCtor = Vue.extend(Message),
      message = new MessageCtor({
        data: options
      });
  let msgEle = document.querySelector("body > .message");
  if(msgEle) {
    document.body.removeChild(msgEle);
  }
  msgEle = message.$mount().$el;
  document.body.append(msgEle);
  setTimeout(() => {
    document.body.removeChild(msgEle)
  },options.duration || 2000);
}
Vue.prototype.$message = $message;
