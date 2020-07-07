let googleMap = {
  show() {
    console.log(`start render google map`);
  },
};

let baiduMap = {
  display() {
    console.log(`start render baidu map`);
  },
};
let baiduAdapter = {
  show() {
    return baiduMap.display();
  },
};
let renderMap = function (map) {
  if (map instanceof Object) {
    map.show();
  }
};
renderMap(googleMap);
renderMap(baiduAdapter);

// demo2
let getBeijingCity = (function () {
  let beijingCity = [
    { name: "chaoyang", id: 11 },
    { name: "haiding", id: 12 },
    { name: "daqing", id: 13 },
  ];
  return beijingCity;
})();

let render = function (fn) {
  console.log(`start beijing map`);
  document.write(JSON.stringify(fn));
};

let addressAdapter = function (oldAddressfn) {
  let address = {};
  oldAddressfn.forEach((city) => {
    address[city.name] = city.id;
  });
  return address;
};

// render(getBeijingCity);
render(addressAdapter(getBeijingCity));
