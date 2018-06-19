// pages/picker/picker.js
var addSrc = require("../../base/address.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "",
    tempInput: ""
  },
  //var data=[];
  //module.exports=data;
  setAddress: function(e) {
    var ads = e.detail.value;
    console.log("当前地址：" + ads);
    this.setData({
      tempInput: ads
    });
  },
  sub: function(e) {
    for(let s of addSrc){
      console.log(s);
    }
    this.setData({
      address: this.data.tempInput
    });
  }
})