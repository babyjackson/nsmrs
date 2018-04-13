const app = getApp();
Page({
  data: {
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
    ]
    
  },
  onLoad: function (options) {
    var cData = "listData["+1+"].data";
    console.log(cData)
    var datas = [
      {
        title: '标题文字9'
      },
      {
        title: '标题图片',
      },
      {
        title: '标题文字',
      }
    ];
    console.log(datas);
    this.setData({ //再set值

      [cData]: datas

    })

    
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
      active:false
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

 
})