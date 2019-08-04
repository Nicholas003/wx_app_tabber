//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    tab:{
      color: '#8799a3',//默认颜色
      selectedColor: '#8dc63f',//选中时的颜色
      backgroundColor:"#ffffff",//背景颜色
      list:[
        {
          pagePath: '../index/index',
          text: 'one',
          iconPath: "http://aabc.ysld.me/component.png",
          selectedIconPath: "http://aabc.ysld.me/component_cur.png",
          absolutePath: "pages/index/index"  //绝对路径
        },
        {
          pagePath:'../one/one',
          text:'one',
          iconPath:"http://aabc.ysld.me/plugin.png",
          selectedIconPath:"http://aabc.ysld.me/plugin_cur.png",
          absolutePath:"pages/one/one"
        },
        {
          pagePath: '../two/two',
          text: 'two',
          iconPath: "http://aabc.ysld.me/about.png",
          selectedIconPath: "http://aabc.ysld.me/about_cur.png",
          absolutePath: "pages/two/two"
        },
      ]
    }
  }
})