// pages/component/jxsc/jxsc.js
const app = getApp()
var template = require('../../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: { curHdIndex: 0, curBdIndex: 0 },
    navtop:[
      {
        navurl:"",
        imgsrc:"/img/scnav_1_1.png",
        text:"首页",
        current:"current"
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_2.png",
        text: "皮肤保养",
        current:""
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_3.png",
        text: "身体护理",
        current: ""
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_4.png",
        text: "口腔护理",
        current: ""
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_5.png",
        text: "头发护理",
        current: ""
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_6.png",
        text: "胡须护理",
        current: ""
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_7.png",
        text: "礼品/旅行",
        current: ""
      },
      {
        navurl: "../product/product",
        imgsrc: "/img/scnav_8.png",
        text: "男士香水",
        current: ""
      }
    ],
    zstj:[
      {
        url:"",
        imgsrc:"/img/allimg.jpg",
        tit:"赫恩男士洗面奶",
        xj:"125",
        yj:"1368"
      },
      {
        url: "",
        imgsrc: "/img/allimg.jpg",
        tit: "赫恩男士洗面奶",
        xj: "125",
        yj: "1368"
      },
      {
        url: "",
        imgsrc: "/img/allimg.jpg",
        tit: "赫恩男士洗面奶",
        xj: "125",
        yj: "1368"
      }
    ],
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
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
  },
  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    this.setData({
      tabArr: _obj
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
  
  }
})