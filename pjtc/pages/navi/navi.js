// pages/navi/navi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  changePage: function (e) {
    switch (e.target.dataset.index) {
      case '0':
        //btn组件
        wx.navigateTo({
          url: '../btns/btns'
        });
        break;
      case '1':
        //模版相关
        wx.navigateTo({
          url: '../template/template'
        });
        break;
      case '2':
        //一些css
        wx.navigateTo({
          url: '../css/css'
        });
        break;
      case '3':
        //一些事件
        wx.navigateTo({
          url: '../event/event'
        });
        break;
      case '4':
        //logs
        wx.navigateTo({
          url: '../logs/logs'
        });
        break;
      case '5':
        //首页入口
        wx.navigateTo({
          url: '../index/index'
        });
        break;
      case '6':
        //input组件
        wx.navigateTo({
          url: '../input/input'
        });
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})