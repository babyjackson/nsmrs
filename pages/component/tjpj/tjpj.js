// pages/component/tjpj/tjpj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
        imgUrl:"/img/allimg.jpg",
        tips:"小店",
        tit:"长靴女秋冬欧美廋腿弹力靴平跟长筒靴女绒面高筒靴",
        price:"¥49.90",
        num:"x1",
        color:"颜色:黑色",
        size:"尺码:36",
        dpimg:"/img/allimg.jpg",
        dptit:"琪琪女鞋",
        mjname:"卖家：冰心baby美",
        choosesrc:[],
        select: "",
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      select:true
    })
  },
  //选择事件
  selectList: function (e) {//data-index
    //获取data传进来的index
    let selected = !this.data.select
    this.setData({
      select: selected
    });
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
  /****选择图片 */
  chooseImage: function (event){
    var that = this
    wx.chooseImage({
      count:5,
      sizeType: ['original', 'compressed'],/****指定是原图还是压缩图，默认是二者都有 */
      sourceType:['album','camera'],/****指定来源是相册还是相机，默认二者都有 */
      success:function(res){
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
  }
})