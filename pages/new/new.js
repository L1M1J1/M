// pages/new/new.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    JingPing:[],
    RenQi:[],
    ZuiXing:[],
    ReMeng:[],
    XiaoBian:[],
    BenZhou:[],
    indicatorDots: true,//显示面板指示点
    autoplay: true,//自动播放
    beforeColor: "white",//指示点颜色
    afterColor: "coral"//当前选中的指示点颜色

  },
  toKind(){
    wx.navigateTo({
      url: '/pages/kind/kind',
    })
  },

  toEnd(){
    wx.navigateTo({
      url: '/pages/end/end',
    })
  },
  toranking(){
    wx.navigateTo({
      url: '/pages/ranking/ranking',
    })
  },

  toclass(){
    wx.navigateTo({
      url: '/pages/class/class',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    wx.request({
      url: app.globalUrl.manhuaUrl+'/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5', // 漫画接口
     
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=> {
        // console.log(res.data.data.h5_recommend_male_rotation_map) //轮播图
        //console.log(res.data.data.h5_recommend_male_fine_works)  //精品佳作
        // console.log(res.data.data.h5_recommend_male_popular_works)  //人气作品
        // console.log(res.data.data.h5_recommend_male_new_arrival)  //最新上架
        // console.log(res.data.data.h5_recommend_male_hot_serial)  //热门连载
        // console.log(res.data.data.h5_recommend_male_xiaobian_recommend)  //小编推荐
        // console.log(res.data.data.h5_recommend_male_fine_works)  //本周推荐
        var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[];
        
        for (var i = 0; i <6;i++){
          // console.log(res.data.data.h5_recommend_male_fine_works[0])
          if(i<5){
            //轮播图
            arr1.push(res.data.data.h5_recommend_male_rotation_map[i])
           
          }
          if(i<8){
             //精品佳作
            arr2.push(res.data.data.h5_recommend_male_fine_works[i])
          }
          if(i<4){
            //人气作品
            arr3.push(res.data.data.h5_recommend_male_popular_works[i])
            //热门连载
            arr5.push(res.data.data.h5_recommend_male_hot_serial[i])
            //本周推荐
            arr7.push(res.data.data.h5_recommend_male_week_recommend[i])

            
          }
          if (i < 2) {
            //最新上架
            arr4.push(res.data.data.h5_recommend_male_new_arrival[i])
            //小编推荐
            arr6.push(res.data.data.h5_recommend_male_xiaobian_recommend[i])

          }
          // console.log(arr1)
          // console.log(arr2)
          // console.log(arr3)
          // console.log(arr4)
          // console.log(arr5)
          // console.log(arr6)
          // console.log(arr7)
          
          this.setData({
            banner: arr1,
            JingPing:arr2,
            RenQi:arr3,
            ZuiXing:arr4,
            ReMeng:arr5,
            XiaoBian:arr6,
            BenZhou:arr7
          })
          wx.hideNavigationBarLoading()
         
        }
       
     
        
        
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