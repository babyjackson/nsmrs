// pages/component/fx/fxzx/fxzx.js
const app = getApp();
var template = require('../../../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
   tabArr:{curHdIndex:0,curBdIndex:0},
   wntj: [
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口包胶活动扳手汽修车机修多功能板手活塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     },
     {
       imgsrc: "/img/allimg.jpg",
       tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
       price: "¥39.90",
       url: ""
     }
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 3, this)//0表示第一个tabbar
    var idcs = Number(options.id);
    if (!isNaN(parseInt(idcs))){
      this.setData({
        tabArr: { curHdIndex: idcs, curBdIndex: idcs }
      })
    }
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