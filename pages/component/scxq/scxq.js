// pages/component/mswh/mswh.js
const app = getApp()
var template = require('../../../template/template.js');
Page({
  data: {
    /**
     * 页面的初始数据
     */
    coupons:[
      {
        price:20,
        time1:"2018.02.15",
        time2:"2018.03.15",
        man:200
      },
      {
        price: 20,
        time1: "2018.02.15",
        time2: "2018.03.15",
        man: 200
      }
    ],
    swiperImg:[
      {
      imgUrl:"/img/allimg.jpg"
      },
      {
        imgUrl: "/img/allimg.jpg"
      }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    /*****页面配置 */
    tabArr: { curHdIndex: 0, curBdIndex: 0 },
    detailImg:[
      {imgUrl:"/img/detailImg01.jpg"},
      {imgUrl:"/img/detailImg02.jpg" },
      {imgUrl:"/img/detailImg03.jpg" },
      {imgUrl: "/img/detailImg04.jpg"}
    ],
    evaluate:[
      {
        imgUserUrl:"/img/allimg.jpg",
        userName:"13358588888",
        userDescribe:"好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg:"/img/allimg.jpg",
        time:"2017-07-04 10:27:37"
      },
      {
        imgUserUrl: "/img/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: "/img/allimg.jpg",
        time: "2017-07-04 10:27:37"
      },
      {
        imgUserUrl: "/img/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: "/img/allimg.jpg",
        time: "2017-07-04 10:27:37"
      },
      {
        imgUserUrl: "/img/allimg.jpg",
        userName: "13358588888",
        userDescribe: "好吃，好吃。真的好吃啊，草莓干很好吃！",
        certeauImg: "/img/allimg.jpg",
        time: "2017-07-04 10:27:37"
      }
    ],
    relevantTj:[
      {
        navurl:"",
        imgti:"/img/allimg.jpg",
        tit: "啦哒 Carada 鱿鱼味米球（膨化食品）68g 泰国进口 ",
        price:"¥8.80"
      },
      {
        navurl: "",
        imgti: "/img/allimg.jpg",
        tit: "啦哒 Carada 鱿鱼味米球（膨化食品）68g 泰国进口 ",
        price: "¥8.80"
      },
      {
        navurl: "",
        imgti: "/img/allimg.jpg",
        tit: "啦哒 Carada 鱿鱼味米球（膨化食品）68g 泰国进口 ",
        price: "¥8.80"
      },
      {
        navurl: "",
        imgti: "/img/allimg.jpg",
        tit: "啦哒 Carada 鱿鱼味米球（膨化食品）68g 泰国进口 ",
        price: "¥8.80"
      }
    ]
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    
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
  },
  /****轮播**** */
 changeIndicatorDots: function (e) {
   this.setData({
     indicatorDots: !this.data.indicatorDots
   })
 },
 changeAutoplay: function (e) {
   this.setData({
     autoplay: !this.data.autoplay
   })
 },
 intervalChange: function (e) {
   this.setData({
     interval: e.detail.value
   })
 },
 durationChange: function (e) {
   this.setData({
     duration: e.detail.value
   })
 }
})