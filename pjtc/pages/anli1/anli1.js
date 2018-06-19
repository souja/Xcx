// pages/anli1/anli1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chineseScore: "",
    mathScore: "",
    englishScore: "",
    avgScore: '',
    hideTip: true,
    hideResult: true
  },

  calcAvg: function (e) {
    if (this.data.chineseScore == '' || this.data.mathScore == '' || this.data.englishScore == '') {
      this.setData({
        hideTip: false
      });
    } else {
      this.setData({
        hideTip: true
      });

      var avgScore = (this.data.chineseScore * 1 + this.data.mathScore * 1 + this.data.englishScore * 1) / 3;

      this.setData({
        avgScore: avgScore,
        hideResult: false
      });
    }
  },
  syncChinese: function (e) {
    var score = e.detail.value;
    console.log("当前输入的语文成绩：" + score);
    this.setData({
      chineseScore: score
    });
  },
  syncMath: function (e) {
    var score = e.detail.value;
    console.log("当前输入的数学成绩：" + score);
    this.setData({
      mathScore: score
    });
  },
  syncEnglish: function (e) {
    var score = e.detail.value;
    console.log("当前输入的英语成绩：" + score);
    this.setData({
      englishScore: score
    });
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