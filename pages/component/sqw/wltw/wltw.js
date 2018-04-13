// pages/component/sqw/wltw/wltw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosesrc: [],
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
  chooseImage: function (event) {
    var that = this
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],/****指定是原图还是压缩图，默认是二者都有 */
      sourceType: ['album', 'camera'],/****指定来源是相册还是相机，默认二者都有 */
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var imgeList = that.data.choosesrc.concat(res.tempFilePaths);
        //concat方法 是js的方法，用于连接两个或多个数组
        that.setData({
          choosesrc: imgeList
        })
      }
    })
  },
  previewImage: function (e) {
    var that = this;
    var dataid = e.currentTarget.dataset.id;
    var imageList = that.data.choosesrc;
    wx.previewImage({
      current: imageList[dataid],
      urls: this.data.imageList
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})