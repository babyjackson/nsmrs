// pages/component/mqxq/mqxq.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: { curHdIndex: 0, curBdIndex:0},
    active: false,
    selectedNav: 0,
    listData: [
      {
        nav: '品牌',
        data: [
          {
            title: '标题文字1'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '销量',
        selectedItem: '',
        data: [
          {
            title: '标题文字2'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '类别',
        selectedItem: '',
        data: [
          {
            title: '标题文字3'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '价格',
        selectedItem: '',
        data: [
          {
            title: '标题文字4'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
    ],
    mqzxcon: [
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
        tit: "包胶活动扳手汽修车机修多功能板手活口包胶活动扳手汽修车机修多功能板手活塑柄活扳手五金工",
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
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**input值同步** */
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    if (_datasetId){
      this.setData({
        tabArr: _obj
      });
    }
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  /**点击出现下拉**/
  _onNavItemTap(e) {
    const index = e.currentTarget.dataset.index;
    if (this.onDropdownNavItemTap) {
      this.onDropdownNavItemTap(e, index);
    } else {
      console.warn('no onDropdownNavItemTap method');
    }
  },
  /**点击值***/
  _catchListItemTap(e) {
    const { index, parentindex, title } = e.currentTarget.dataset;
    let arr = e.currentTarget.dataset;
    let parent = arr.parentindex;
    let child = arr.index;
    this.setData({
      active: false
    })
    //console.log(parent);
    //console.log(child);
  },
  /***点击空白处隐藏**/
  _catchBgTap(e) {
    if (this.catchDropdownBgTap) {
      this.catchDropdownBgTap(e);
    } else {
      console.warn('no catchDropdownBgTap method');
    }
  },
  /***设置active和selected**/
  onDropdownNavItemTap(e, index) {
    const { selectedNav, active } = this.data;
    let nextactive = !active;
    if (selectedNav != index) {
      nextactive = true;
    }
    this.setData({
      active: nextactive,
      selectedNav: index
    });
  },
  /***隐藏下拉**/
  catchDropdownBgTap(e) {
    this.setData({
      active: false
    });
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