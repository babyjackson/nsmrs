const app = getApp()
var template = require('../../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ppdpinfo:[
      {
        id:1,
        dplogo:"/img/allimg.jpg",
        tit:"自然堂旗舰店",
        num:"124590",
        url:"../dpxq/dpxq",
        ppdpgoods:[
          {
            id:11,
            url:"",
            goodsimg:"/img/allimg.jpg"
          },
          {
            id: 12,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 13,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 14,
            url: "",
            goodsimg: "/img/allimg.jpg"
          }
        ]
      },
      {
        id: 2,
        dplogo: "/img/allimg.jpg",
        tit: "自然堂旗舰店",
        num: "124590",
        url: "",
        ppdpgoods: [
          {
            id: 21,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 22,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 23,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 24,
            url: "",
            goodsimg: "/img/allimg.jpg"
          }
        ]
      },
      {
        id: 3,
        dplogo: "/img/allimg.jpg",
        tit: "自然堂旗舰店",
        num: "124590",
        url: "",
        ppdpgoods: [
          {
            id: 31,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 32,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 33,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 34,
            url: "",
            goodsimg: "/img/allimg.jpg"
          }
        ]
      },
      {
        id: 4,
        dplogo: "/img/allimg.jpg",
        tit: "自然堂旗舰店",
        num: "124590",
        url: "",
        ppdpgoods: [
          {
            id: 41,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 42,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 43,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 44,
            url: "",
            goodsimg: "/img/allimg.jpg"
          }
        ]
      },
      {
        id: 5,
        dplogo: "/img/allimg.jpg",
        tit: "自然堂旗舰店",
        num: "124590",
        url: "",
        ppdpgoods: [
          {
            id: 51,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 52,
            url: "",
            goodsimg: "/img/allimg.jpg"
          },
          {
            id: 53,
            url: "",
            goodsimg: "/img/allimg.jpg"
          }, 
          {
            id: 54,
            url: "",
            goodsimg: "/img/allimg.jpg"
          }
        ]
      }
    ]
  },

  /***进入店铺跳转**/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 1, this)//0表示第一个tabbar
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