let Model = function (id, html) {
  this.id = id;
  this.html = html;
  this.open = false;
};
Model.prototype.create = function () {
  if (!this.open) {
    let model = document.createElement("div");
    model.innerHTML = this.html;
    model.id = this.id;
    document.body.appendChild(model);
    this.open = true;
    model.classList.add("show");
  }
};
Model.prototype.delete = function () {
  if (this.open) {
    let model = document.getElementById(this.id);
    document.body.removeChild(model);
    this.open = false;
  }
};
let createInstance = (function () {
  let instance;
  return function () {
    return instance || (instance = new Model("model", "我是布莱克"));
  };
})();
let operate = {
  setModel: null,
  open() {
    this.setModel = createInstance();
    this.setModel.create();
  },
  delete() {
    this.setModel ? this.setModel.delete() : "";
  },
};
document.getElementById("open").onclick = function () {
  operate.open();
};
document.getElementById("delete").onclick = function () {
  operate.delete();
};
