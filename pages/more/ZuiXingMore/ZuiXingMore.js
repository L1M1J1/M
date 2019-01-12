// pages/more/JingPingMore/JingPingMore.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    JingPingMore: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/home/recommend_list?location_en=h5_recommend_male_new_arrival&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data.data.h5_recommend_male_new_arrival)
        this.setData({
          JingPingMore: res.data.data.h5_recommend_male_new_arrival
        })
        wx.hideNavigationBarLoading()
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