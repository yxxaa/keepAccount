// components/tableBar/tableBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // active: { 
    //   type: Number,
    //   default: 1
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      const pageCount = event.detail;
      // event.detail 的值为当前选中项的索引
      this.setData({
        active: pageCount
      });
      console.log(event.detail)
      if (pageCount == 2) {
        console.log("sss")
        wx:wx.redirectTo({
          url: '/miniprogram/pages/keepAccount/keepAccount',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        // wx.reLaunch({
        //   url: '/miniprogram/pages/keepAccount/keepAccount.wxml'
        // })
      }

    },
  }
})