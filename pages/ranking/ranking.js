
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Read: [],
    News:[],
    Com:[],
    READ:true,
    NEWS:false,
    COM:false
  },

  READ:function(e){
    this.setData({
      READ: true,
      NEWS: false,
      COM: false
    })
  },

  NEWS: function (e) {
    this.setData({
      READ: false,
      NEWS: true,
      COM: false
    })
  },

  COM: function (e) {
    this.setData({
      READ: false,
      NEWS: false,
      COM: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 阅读榜
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/home/rank_read?_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data.week)
        this.setData({
          Read: res.data.data.week
        })
      }
    })

    //新作榜
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/home/rank_share?_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data.week)
        this.setData({
          News: res.data.data.week
        })
      }
    })


    //综合榜
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/home/rank?_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)
        this.setData({
          Com: res.data.data.week
        })
      }
    })
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