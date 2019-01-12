// pages/class/class.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Whole:[],
    Plot:[],
    Love:[],
    Funny:[],
    Daily:[],
    Ceo:[],
    Fantasy: [],
    Juvenile: [],
    Action: [],
    Campus: [],
    Urban: [],
    Suspense: [],
    Supernatural: [],
    Antiquity: [],
    Other: [],
    WHO:true,
    PLO:false,
    LOV: false,
    FUN: false,
    DAI: false,
    CEO: false,
    FAN: false,
    JUV: false,
    ACT: false,
    CAM: false,
    URB: false,
    SUS: false,
    SUP: false,
    ANT: false,
    OTH: false
  },
  WHO: function (e) {
    this.setData({
      WHO: true,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  PLO: function (e) {
    this.setData({
      WHO: false,
      PLO: true,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  LOV: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: true,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  FUN: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: true,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  DAI: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: true,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  CEO: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: true,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  FAN: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: true,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  JUV: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: true,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  ACT: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: true,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  CAM: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: true,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  URB: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: true,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  SUS: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: true,
      SUP: false,
      ANT: false,
      OTH: false
    })
  },
  SUP: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: true,
      ANT: false,
      OTH: false
    })
  },
  ANT: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: true,
      OTH: false
    })
  },
  OTH: function (e) {
    this.setData({
      WHO: false,
      PLO: false,
      LOV: false,
      FUN: false,
      DAI: false,
      CEO: false,
      FAN: false,
      JUV: false,
      ACT: false,
      CAM: false,
      URB: false,
      SUS: false,
      SUP: false,
      ANT: false,
      OTH: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showNavigationBarLoading()
    //全部
    var whole = '/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=100&order=&_type=h5';
    //剧情
    var plot = '/wbcomic/comic/filter_result?cate_id=1&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';
    //恋爱
    var love = '/wbcomic/comic/filter_result?cate_id=5&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //搞笑
    var funny = '/wbcomic/comic/filter_result?cate_id=3&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //日常
    var daily = '/wbcomic/comic/filter_result?cate_id=4&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //总裁
    var ceo = '/wbcomic/comic/filter_result?cate_id=6&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //奇幻
    var fantasy = '/wbcomic/comic/filter_result?cate_id=2&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //少年
    var juvenile = '/wbcomic/comic/filter_result?cate_id=7&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //动作
    var action = '/wbcomic/comic/filter_result?cate_id=8&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';


    //校园
    var campus = '/wbcomic/comic/filter_result?cate_id=9&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //都市
    var urban = '/wbcomic/comic/filter_result?cate_id=10&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';


    //悬疑
    var suspense = '/wbcomic/comic/filter_result?cate_id=12&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //灵异
    var supernatural = '/wbcomic/comic/filter_result?cate_id=11&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';


    //古风
    var antiquity = '/wbcomic/comic/filter_result?cate_id=15&end_status=0&comic_pay_status=0&page_num=1&rows_num=40&order=&_type=h5';

    //其他
    var other = '/wbcomic/comic/filter_result?cate_id=16&end_status=0&comic_pay_status=0&page_num=1&rows_num=20&order=&_type=h5';
    this.http(whole, this.callback,'Whole');
    this.http(plot, this.callback,'Plot');
    this.http(love, this.callback, 'Love');
    this.http(funny, this.callback, 'Funny');
    this.http(daily, this.callback, 'Daily');
    this.http(ceo, this.callback, 'Ceo');
    this.http(fantasy, this.callback, 'Fantasy');
    this.http(juvenile, this.callback, 'Juvenile');
    this.http(action, this.callback, 'Action');
    this.http(campus, this.callback, 'Campus');
    this.http(urban, this.callback, 'Urban');

    this.http(suspense, this.callback, 'Suspense');
    this.http(supernatural, this.callback, 'Supernatural');
    this.http(antiquity, this.callback, 'Antiquity');
    this.http(other, this.callback, 'Other');


  },
  http: function(category, callback,cate) {
    wx.request({
      url: app.globalUrl.manhuaUrl + category,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        callback(res.data.data.data,cate)
      }
    })
  },
  onReachBottom: function (event) {
    var wholenext = app.globalUrl.manhuaUrl +'/wbcomic/comic/filter_result?cate_id=0&end_status=0&comic_pay_status=0&page_num=1&rows_num=100&order=&_type=h5';
    this.http(wholenext,this.callback);
  },

  callback: function (res,cate) {

    
  
    var redayData={};
    redayData[cate]={
      list:res
    }
    this.setData(redayData);
    console.log(redayData);
    wx.hideNavigationBarLoading()

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },



 
})