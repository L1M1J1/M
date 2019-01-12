var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ManHuaList:[]

  },
  onLoad: function (options) {
    console.log(options)
    wx.showNavigationBarLoading()
wx.request({
  url: app.globalUrl.manhuaUrl + '/wbcomic/comic/comic_play?chapter_id='+options.id+'&create_source=h5&_type=h5', // 漫画接口

  header: {
    'content-type': 'application/json' // 默认值
  },
  success: (res) => {
    console.log(res.data.data.json_content.page)

    this.setData({
      ManHuaList: res.data.data.json_content.page
    })
    wx.hideNavigationBarLoading()

  }

})

  }
})