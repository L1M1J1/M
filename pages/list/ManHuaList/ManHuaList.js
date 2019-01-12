// pages/list/ManHuaList/ManHuaList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ManHuaList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    // console.log(options);
    var name = options.name;
    // console.log(name)
    this.data.name = name;
    wx.request({
      url: 'http://apiwap.vcomic.com/wbcomic/comic/comic_play?chapter_id=' + options.id+'&_request_from=pc', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data.json_content)
        // console.log(res.data.data.json_content.page)
        this.setData({
          ManHuaList: res.data.data.json_content.page
        })    
        wx.hideNavigationBarLoading()

        }
        
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
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