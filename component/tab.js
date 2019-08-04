// component/tab.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab_data:{   //这里是tab的信息可以设置一个默认值
      type:Object,
      value: app.globalData.tab
    },
    is_show:{    //是否显示
      type:Boolean,
      value:false,
      observer(newVal, oldVal) {
          this.setData({
            show_class: newVal
          })
      }
    },
    current_tab:{
      type:Object,
      value:'',
      observer(newVal, oldVal) {
        // console.log(newVal)
        if (newVal){
          let index = this.get_index();
          let data = this.data.tab_data;
          data.list[index] = newVal;
          this.setData({
            tab_data: data
          })
          // console.log(this.data.tab_data)
        }
        
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false,
    show_class:false,
    selected_index :''  //被选中的
  },
  /**
   * 组件的方法列表
   */
  methods: {
    get_index(){
      let pageAbsolutePath = getCurrentPages()[0].route;
      let { list } = this.data.tab_data;
      for (let i = 0; i < list.length; i++) {  //确定当前页面
        if (pageAbsolutePath == list[i].absolutePath) {
          return i;
        }
      }
    },
    NavChange(e){
      let { pagePath, absolutePath } = e.currentTarget.dataset.data;
      let pageAbsolutePath = getCurrentPages()[0].route;
      if (pageAbsolutePath == absolutePath){  //判断当前页面的绝对路径
        // console.log('一样')
        this.triggerEvent('second_click')
        return;
      }
      // console.log(getCurrentPages())
      this.setData({
        show_class: false
      })
      setTimeout(_=>{
        wx.redirectTo({
          url: pagePath
        })
      },500)
    }

  },
  attached(){
    let pageAbsolutePath = getCurrentPages()[0].route;
    let { list } = app.globalData.tab;
    let index = this.get_index();
    this.setData({
      selected_index: index
    })
    setTimeout(_=>{
      this.setData({
        show: true,
        show_class:true
      })
    },200)
  }
})
