// pages/detail/JingPingDetail/JingPingDetail.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: [],
    Yes:[],
    Wed:[],
    Tues:[],
    Mon:[],
    Sun:[],
    Sat:[],
    sat:false,
    sun:false,
    mon:false,
    tues:false,
    wed:false,
    thur:false,
    fri:true
    
  },
  sat: function (e) {
    this.setData({
      sat: true,
      sun: false,
      mon: false,
      tues: false,
      wed: false,
      thur: false,
      fri: false
    })
  },
  sun: function (e) {
    this.setData({
      sat: false,
      sun: true,
      mon: false,
      tues: false,
      wed: false,
      thur: false,
      fri: false
    })
  },

  mon: function (e) {
    this.setData({
      sat: false,
      sun: false,
      mon: true,
      tues: false,
      wed: false,
      thur: false,
      fri: false
    })
  },

  tues: function (e) {
    this.setData({
      sat: false,
      sun: false,
      mon: false,
      tues: true,
      wed: false,
      thur: false,
      fri: false
    })
  },

  wed: function (e) {
    this.setData({
      sat: false,
      sun: false,
      mon: false,
      tues: false,
      wed: true,
      thur: false,
      fri: false
    })
  },

  thur: function (e) {
    this.setData({
      sat: false,
      sun: false,
      mon: false,
      tues: false,
      wed: false,
      thur: true,
      fri: false
    })
  },

  fri: function (e) {
    this.setData({
      sat: false,
      sun: false,
      mon: false,
      tues: false,
      wed: false,
      thur: false,
      fri: true
    })
  },


  





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


    wx.showNavigationBarLoading()

    //今天
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)


        //今天
        var One2=[],One3=[];
        for (var idx in res.data.data.comic_list){
          var comic_list = res.data.data.comic_list[idx]
          var temp={
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          One2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          One3.push(temp);
        }

        var merge = [], kvIndex = {};
        for (var i = 0; i < One2.length; i++) {
          for (var j = 0; j < One3.length; j++) {
            if (One2[i].id == One3[j].id) {
              var item
              if (kvIndex[One2[i].id] == undefined) {
                kvIndex[One2[i].id] = merge.length;
                item = {};
                for (var attr in One2[i]) item[attr] = One2[i][attr];
                merge[kvIndex[One2[i].id]] = item;

              } else item = merge[kvIndex[One2[i].id]];
              for (var attr in One3[j]) item[attr] = One3[j][attr];
            }
          }
        }
        // console.log(merge)
    


        this.setData({
          today: merge
        })
        wx.hideNavigationBarLoading()

      }
    })

    //昨天
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=20190111&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)

        
       
        var Two2 = [], Two3 = [];
        for (var idx in res.data.data.comic_list) {
          var comic_list = res.data.data.comic_list[idx]
          var temp = {
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          Two2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          Two3.push(temp);
        }

        var yes = [], kvIndex = {};
        for (var i = 0; i < Two2.length; i++) {
          for (var j = 0; j < Two3.length; j++) {
            if (Two2[i].id == Two3[j].id) {
              var item
              if (kvIndex[Two2[i].id] == undefined) {
                kvIndex[Two2[i].id] = yes.length;
                item = {};
                for (var attr in Two2[i]) item[attr] = Two2[i][attr];
                yes[kvIndex[Two2[i].id]] = item;

              } else item = yes[kvIndex[Two2[i].id]];
              for (var attr in Two3[j]) item[attr] = Two3[j][attr];
            }
          }
        }
        // console.log(yes)



        this.setData({
          Yes:yes
        })
        wx.hideNavigationBarLoading()

      }
    })


    //周三
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=20190110&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)



        var Two2 = [], Two3 = [];
        for (var idx in res.data.data.comic_list) {
          var comic_list = res.data.data.comic_list[idx]
          var temp = {
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          Two2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          Two3.push(temp);
        }

        var WED = [], kvIndex = {};
        for (var i = 0; i < Two2.length; i++) {
          for (var j = 0; j < Two3.length; j++) {
            if (Two2[i].id == Two3[j].id) {
              var item
              if (kvIndex[Two2[i].id] == undefined) {
                kvIndex[Two2[i].id] = WED.length;
                item = {};
                for (var attr in Two2[i]) item[attr] = Two2[i][attr];
                WED[kvIndex[Two2[i].id]] = item;

              } else item = WED[kvIndex[Two2[i].id]];
              for (var attr in Two3[j]) item[attr] = Two3[j][attr];
            }
          }
        }
        // console.log(WED)



        this.setData({
          Wed: WED
        })
        wx.hideNavigationBarLoading()

      }
    })

    //周二
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=20190109&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)



        var Two2 = [], Two3 = [];
        for (var idx in res.data.data.comic_list) {
          var comic_list = res.data.data.comic_list[idx]
          var temp = {
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          Two2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          Two3.push(temp);
        }

        var TUES = [], kvIndex = {};
        for (var i = 0; i < Two2.length; i++) {
          for (var j = 0; j < Two3.length; j++) {
            if (Two2[i].id == Two3[j].id) {
              var item
              if (kvIndex[Two2[i].id] == undefined) {
                kvIndex[Two2[i].id] = TUES.length;
                item = {};
                for (var attr in Two2[i]) item[attr] = Two2[i][attr];
                TUES[kvIndex[Two2[i].id]] = item;

              } else item = TUES[kvIndex[Two2[i].id]];
              for (var attr in Two3[j]) item[attr] = Two3[j][attr];
            }
          }
        }
        // console.log(WED)



        this.setData({
          Tues: TUES
        })
        wx.hideNavigationBarLoading()

      }
    })
    
    //周一
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=20190108&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)



        var Two2 = [], Two3 = [];
        for (var idx in res.data.data.comic_list) {
          var comic_list = res.data.data.comic_list[idx]
          var temp = {
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          Two2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          Two3.push(temp);
        }

        var MON = [], kvIndex = {};
        for (var i = 0; i < Two2.length; i++) {
          for (var j = 0; j < Two3.length; j++) {
            if (Two2[i].id == Two3[j].id) {
              var item
              if (kvIndex[Two2[i].id] == undefined) {
                kvIndex[Two2[i].id] = MON.length;
                item = {};
                for (var attr in Two2[i]) item[attr] = Two2[i][attr];
                MON[kvIndex[Two2[i].id]] = item;

              } else item = MON[kvIndex[Two2[i].id]];
              for (var attr in Two3[j]) item[attr] = Two3[j][attr];
            }
          }
        }
        // console.log(WED)



        this.setData({
          Mon: MON
        })
        wx.hideNavigationBarLoading()

      }
    })

    //周日
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=20190107&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)



        var Two2 = [], Two3 = [];
        for (var idx in res.data.data.comic_list) {
          var comic_list = res.data.data.comic_list[idx]
          var temp = {
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          Two2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          Two3.push(temp);
        }

        var SUN = [], kvIndex = {};
        for (var i = 0; i < Two2.length; i++) {
          for (var j = 0; j < Two3.length; j++) {
            if (Two2[i].id == Two3[j].id) {
              var item
              if (kvIndex[Two2[i].id] == undefined) {
                kvIndex[Two2[i].id] = SUN.length;
                item = {};
                for (var attr in Two2[i]) item[attr] = Two2[i][attr];
                SUN[kvIndex[Two2[i].id]] = item;

              } else item = SUN[kvIndex[Two2[i].id]];
              for (var attr in Two3[j]) item[attr] = Two3[j][attr];
            }
          }
        }
        // console.log(SUN)



        this.setData({
          Sun: SUN
        })
        wx.hideNavigationBarLoading()

      }
    })


    //周六
    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/daypub_list?pub_day=20190106&page_num=1&rows_num=20&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data)



        var Two2 = [], Two3 = [];
        for (var idx in res.data.data.comic_list) {
          var comic_list = res.data.data.comic_list[idx]
          var temp = {
            imgUrl: "http://img.manhua.weibo.com/" + comic_list.hcover,
            title: comic_list.name,
            id: comic_list.comic_id
          }
          Two2.push(temp);
        }

        for (var idx in res.data.data.chapter_list) {
          var chapter_list = res.data.data.chapter_list[idx]
          var temp = {
            chapter_name: chapter_list.chapter_name,
            id: chapter_list.comic_id
          }
          Two3.push(temp);
        }

        var SAT = [], kvIndex = {};
        for (var i = 0; i < Two2.length; i++) {
          for (var j = 0; j < Two3.length; j++) {
            if (Two2[i].id == Two3[j].id) {
              var item
              if (kvIndex[Two2[i].id] == undefined) {
                kvIndex[Two2[i].id] = SAT.length;
                item = {};
                for (var attr in Two2[i]) item[attr] = Two2[i][attr];
                SAT[kvIndex[Two2[i].id]] = item;

              } else item = SAT[kvIndex[Two2[i].id]];
              for (var attr in Two3[j]) item[attr] = Two3[j][attr];
            }
          }
        }
        // console.log(SAT)



        this.setData({
          Sat: SAT
        })
        wx.hideNavigationBarLoading()

      }
    })

  },






  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})