// pages/component/bdsj/bdsj.js
var interval = null //倒计时函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"获取短信验证码",
    currentTime: 61
  },
  /****获取短信验证码 */
  sendmessage:function(options){
    var that = this;
    var currentTimes = that.data.currentTime;
    console.log(currentTimes)
    interval = setInterval(function (){
      currentTimes--;
      that.setData({
        time: currentTimes + '秒'
      })
      if (currentTimes <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTimes: 61,
          disabled: false
        })
      }
    }, 1000)  
  },
  getVerificationCode(e){
    console.log(e);
    this.sendmessage();
    var that = this;
    that.setData({
      disabled: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
  
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