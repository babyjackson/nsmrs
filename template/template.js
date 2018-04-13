
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/component/index",
      "iconPath": "/img/1_03.png",
      "selectedIconPath": "/img/0_03.png",
      "text": "首页"
    },
    {
      "current": 1,
      "pagePath": "/pages/component/sszx/sszx",
      "iconPath": "/img/1_09.png",
      "selectedIconPath": "/img/0_09.png",
      "text": "社区"
    },
    {
      "current": 2,
      "pagePath": "/pages/component/brand/brand",
      "iconPath": "/img/1_06.png",
      "selectedIconPath": "/img/0_06.png",
      "text": "品牌"
    },
    {
      "current": 3,
      "pagePath": "/pages/component/me/me",
      "iconPath": "/img/1_12.png",
      "selectedIconPath": "/img/0_12.png",
      "text": "我的"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
   otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}