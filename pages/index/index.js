//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:true,
    tab_data:app.globalData.tab
  },
  onLoad: function () {

  },
  click: function(e) {
    this.setData({
      show: !this.data.show
    })
    console.log(this.data.show)
  },
  onPageScroll(e){
    if (e.scrollTop>200){
      this.setData({
        show:false
      })
    }
    if (e.scrollTop < 200) {
      this.setData({
        show: true
      })
    }
  },
  second(e){
    console.log(e)
  }
})
