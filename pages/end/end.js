// pages/end/end.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    WanJie:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        // console.log(res.data.data.ending_works_list)
        this.setData({
          WanJie: res.data.data.ending_works_list
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