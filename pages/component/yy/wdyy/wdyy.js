// pages/component/yy/wdyy/wdyy.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: { curHdIndex: 0, curBdIndex: 0 },
    jxz:[
      {
        date:"10月12日",
        time:"13:00",
        xm:"面部除皱",
        dd:"北京朝阳国贸店金夫人"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  reserOne:function(options){
    wx:wx.navigateTo({
      url: '../ddyy/ddyy?=0',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
  
  },
  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
    });
  }
})