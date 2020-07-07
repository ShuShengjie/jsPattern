var zhangsan = (function() {
  var zhangsan = function(msg) {
    this.menling = msg;
  }
  var men;
  var info = {
    sendMessage: function(message) {
      if(!men) {
        men = new zhangsan(message)
      }
      return men
    }
  }
  return info;
})()

var lisi = {
  callZhangsan(msg) {
    var _zhangsan = zhangsan.sendMessage(msg)
    alert(_zhangsan.menling)
    _zhangsan = null;
  }
}

var wangwu = {
  callZhangsan(msg) {
    var _zhangsan = zhangsan.sendMessage(msg)
    alert(_zhangsan.menling)
  }
}

lisi.callZhangsan('dingdong');
wangwu.callZhangsan('dingding');