// pages/component/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      {
        imgsrc:"/img/banner.jpg"
      },
      {
        imgsrc: "/img/banner.jpg"
      },
      {
        imgsrc:"/img/banner.jpg"
      }
    ],
    menu: [
      {
        url: '/img/menu01.png',
        name: '商城',
        id: '01',
        urls: '/pages/component/category/category'
      },
      {
        url: '/img/menu02.png',
        name: '品牌在线',
        id: '02',
        urls: 'ppdp/ppdp'
      },
      {
        url: '/img/menu03.png',
        name: '护肤方案',
        id: '03',
        urls: 'hffa/hffa'
      },
      {
        url: '/img/menu04.png',
        name: '绅士乐活',
        id: '04',
        urls: 'sslh/sslh'
      },
      {
        url: '/img/menu05.png',
        name: '社区',
        id: '05',
        urls: 'sqw/sqs/sqs'
      }
    ],
    rxsp:[
      {
        urlimg:"",
        imgsrc:"/img/allimg.jpg",
        tit:"手推轮式播种设备",
        price:"¥55",
        ljgmurl:"/pages/component/scxq/scxq"
      },
      {
        urlimg: "",
        imgsrc: "/img/allimg.jpg",
        tit: "手推轮式播种设备手推轮式播种设备",
        price: "¥55",
        ljgmurl: ""
      },
      {
        urlimg: "",
        imgsrc: "/img/allimg.jpg",
        tit: "手推轮式播种设备",
        price: "¥55",
        ljgmurl: ""
      },
      {
        urlimg: "",
        imgsrc: "/img/allimg.jpg",
        tit: "手推轮式播种设备",
        price: "¥55",
        ljgmurl: ""
      },
      {
        urlimg: "",
        imgsrc: "/img/allimg.jpg",
        tit: "手推轮式播种设备",
        price: "¥55",
        ljgmurl: ""
      },
      {
        urlimg: "",
        imgsrc: "/img/allimg.jpg",
        tit: "手推轮式播种设备",
        price: "¥55",
        ljgmurl: ""
      }
    ],
    ppzx:[
      {
        url:"",
        imgsrc:"/img/allimg.jpg"
      },
      {
        url: "",
        imgsrc: "/img/allimg.jpg"
      },
      {
        url: "",
        imgsrc: "/img/allimg.jpg"
      },
      {
        url: "",
        imgsrc: "/img/allimg.jpg"
      }
    ],
    sqpl:[
      {
        tx:"/img/allimg.jpg",
        name:"王小喵VV瘦脸",
        wt:"提了一个问题 · 1小时前",
        imgsrc:"/img/allimg.jpg",
        url:"",
        tit:"如何让自己在清晨醒来时看起来更帅、更精神饱满！",
        txt: "在睡觉前认真的洗脸是非常重要的，当你在外界环境中积累了一天的灰尘，是时候把这些...",
        gz:"12354",
        xx:"153",
        zz:"456"
      },
      {
        tx: "/img/allimg.jpg",
        name: "王小喵VV瘦脸",
        wt: "提了一个问题 · 1小时前",
        imgsrc: "/img/allimg.jpg",
        url: "",
        tit: "如何让自己在清晨醒来时看起来更帅、更精神饱满！",
        txt: "在睡觉前认真的洗脸是非常重要的，当你在外界环境中积累了一天的灰尘，是时候把这些...",
        gz: "12354",
        xx: "153",
        zz: "456"
      },
      {
        tx: "/img/allimg.jpg",
        name: "王小喵VV瘦脸",
        wt: "提了一个问题 · 1小时前",
        imgsrc: "/img/allimg.jpg",
        url: "",
        tit: "如何让自己在清晨醒来时看起来更帅、更精神饱满！",
        txt: "在睡觉前认真的洗脸是非常重要的，当你在外界环境中积累了一天的灰尘，是时候把这些...",
        gz: "12354",
        xx: "153",
        zz: "456"
      }
    ],
    hffa:[
      {
        url:"",
        tit:"“颜王”向来步步为赢，会护肤的男人才有戏",
        txt: "如今小鲜肉当道，各路“鲜货”让身边的姑娘辗转难眠，更有直接在男明星微博下留言“我要嫁给你”，这一切都是高颜值带来...",
        imgsrc:"/img/allimg.jpg",
        yl:"32",
        pl:"36",
        dz:"18"
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
    ],
    sshf:[
      {
        id:1,
        sshfli:[
          {
            id:11,
            tips:"尖货秒杀",
            tit:"皮肤护肤",
            yw:"The skin protect",
            imgsrc:"/img/allimg.jpg",
            url:""
          },
          {
            id: 12,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          },
          {
            id: 13,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          },
          {
            id: 14,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          }
        ]
      },
      {
        id: 2,
        sshfli: [
          {
            id: 15,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          },
          {
            id: 16,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          },
          {
            id: 17,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          },
          {
            id: 18,
            tips: "尖货秒杀",
            tit: "皮肤护肤",
            yw: "The skin protect",
            imgsrc: "/img/allimg.jpg",
            url: ""
          }
        ]
      }
    ],
    wntj:[
      {
        imgsrc:"/img/allimg.jpg",
        tit: "包胶活动扳手汽修车机修多功能板手活口塑柄活扳手五金工具",
        price:"¥39.90",
        url:""
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
    ],
    coupons:[
      {
        man:20,
        price:2,
        datestart:"2018.4.10",
        dateend:"2018.4.20"
      },
      {
        man: 200,
        price: 20,
        datestart: "2018.4.10",
        dateend: "2018.4.20"
      },
      {
        man: 200,
        price: 20,
        datestart: "2018.4.10",
        dateend: "2018.4.20"
      },
      {
        man: 2000,
        price: 200,
        datestart: "2018.4.10",
        dateend: "2018.4.20"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //美食快讯的自动滚动
    this.setData({
      mskxnews: [
        {
          url:"news/news",
          text: "外协加工质量保证协议的技术管理1"
        },
        {
          url: "news/news",
          text: "外协加工质量保证协议的技术管理2"
        },
        {
          url: "news/news",
          text: "外协加工质量保证协议的技术管理3"
        }
      ]
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
  /**input值同步** */
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
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
  bindBarcodeBlur: function (e) {
    this.setData({
      hiddenDropdown: true,
      hiddenClear: true
    })
  }
  /*query: function (e) {
    var url = "https://www.xxx.com/query";//查询数据的URL  
    var that = this;
    if (that.data.barcode == undefined
      || that.data.barcode == null
      || that.data.barcode.length <= 0) {
      that.setData({ hiddenData: true });
      wx.showToast({
        title: '请输入条码',
        image: '/images/fail.png',
        duration: 2000
      });
      return;
    } */ 
  /***滚动** */
  
})