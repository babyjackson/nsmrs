// pages/component/hffa/hffa.js
const app = getApp()
var template = require('../../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgbanner:[
      {
        imgsrc:"/img/allimg.jpg",
        url:"",
        tit:"“颜王”向来步步为赢，会护肤的男人才有戏1"
      },
      {
        imgsrc: "/img/allimg.jpg",
        url: "",
        tit: "“颜王”向来步步为赢，会护肤的男人才有戏2"
      },
      {
        imgsrc: "/img/allimg.jpg",
        url: "",
        tit: "“颜王”向来步步为赢，会护肤的男人才有戏3"
      }
    ],
    hffa: [
      {
        url: "../news/news?id=0",
        tit: "“颜王”向来步步为赢，会护肤的男人才有戏",
        txt: "如今小鲜肉当道，各路“鲜货”让身边的姑娘辗转难眠，更有直接在男明星微博下留言“我要嫁给你”，这一切都是高颜值带来...",
        imgsrc: "/img/allimg.jpg",
        yl: "32",
        pl: "36",
        dz: "18"
      },
      {
        url: "",
        tit: "“颜王”向来步步为赢，会护肤的男人才有戏",
        txt: "如今小鲜肉当道，各路“鲜货”让身边的姑娘辗转难眠，更有直接在男明星微博下留言“我要嫁给你”，这一切都是高颜值带来...",
        imgsrc: "/img/allimg.jpg",
        yl: "32",
        pl: "36",
        dz: "18"
      },
      {
        url: "",
        tit: "“颜王”向来步步为赢，会护肤的男人才有戏",
        txt: "如今小鲜肉当道，各路“鲜货”让身边的姑娘辗转难眠，更有直接在男明星微博下留言“我要嫁给你”，这一切都是高颜值带来...",
        imgsrc: "/img/allimg.jpg",
        yl: "32",
        pl: "36",
        dz: "18"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  
  }
})