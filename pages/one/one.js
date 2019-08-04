// pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onPageScroll(e) {
    if (e.scrollTop > 200) {
      this.setData({
        tab: {
          pagePath: '../index/index',
          text: '回顶部',
          iconPath: "http://aabc.ysld.me/0.jpg",
          selectedIconPath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565510626&di=af01fe2a83353338caad713927d15c00&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F59%2F93%2F0757487529f1fe2.jpg",
          absolutePath: "pages/one/one"
        },
      })
    }else{
      this.setData({
        tab: {
          pagePath: '../one/one',
          text: 'one',
          iconPath: "http://aabc.ysld.me/plugin.png",
          selectedIconPath: "http://aabc.ysld.me/plugin_cur.png",
          absolutePath: "pages/one/one"
        }
      })
      
    }
    if (e.scrollTop < 200) {
      this.setData({
        show: true
      })
    }
  },
  second(e){
    wx.pageScrollTo({
      scrollTop: 0
    })
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