// pages/slider/slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'JPN',
        value: '日本'
      },
      {
        name: 'ENG',
        value: '英国'
      },
      {
        name: 'TUR',
        value: '法国'
      },
    ],
    name: "default",
    boxData: ["篮球", "足球", "羽毛球"],
    color: ["red", "black", "blue"]
  },
  //switch的选中状态
  tellStatus: function(e) {
    // console.log(e);
    console.log(e.detail.value ? "选中" : "未选中");
  },
  //radioGroup选中的改变
  chooseGender: obj => {
    console.log(obj.detail.value == 1 ? "Gender：男" : "Gender:女");
  },
  //checkboxGroup
  selectAbc: e => {
    console.log(e.detail.value);
  },
  //id
  idTest: e => {

  },
  ttt: e => {
    console.log("test btn click");
  },
  tellLength: function(e) {
    console.log(e);
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  test: () => {
    var num = [1, 2, 3, 4, 5, 6, 7];
    num.forEach(v => {
      console.log(v);
    });
  },
  test1: () => {
    function ss(...num) {
      for (let n of num) {
        console.log(n);
      }
    }
    ss(1, 2, 3);
    ss(2, 3, 4, 5, 6, );
  },

  test2: function() {
    var self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          name: "bbb"
        });
      },
    })
  },
  //属性拼接
  test3: function() {
    var ob = {
      ["s" + "e" + "l" + "f"]: "abc"
    };
    console.log(ob);
  },
  //数组解构：从数组中提取，按对应位置，对变量赋值
  test4: function() {
    var numArr = [11, 22, 33, 44];
    var [a, b, c, d] = numArr;
    console.log(a, d);
  },
  //对象解构
  test5: function() {
    var person = {
      name: "aa",
      age: 18,
      sex: 1
    };
    var {
      name,
      age
    } = person;
    console.log(name, age);
  },
  //字符串解构
  test6: () => {
    var [z, x, c, v] = "java";
    console.log(z, c);
  },
  //函数解构
  test7: () => {
    function tt(x, y) {
      console.log(x, y);
    }

    tt([1, 2]);
  }

})