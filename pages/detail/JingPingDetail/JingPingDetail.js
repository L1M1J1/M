// pages/detail/JingPingDetail/JingPingDetail.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    HeaderDetail:[],
    HeaderTag:[],
    HeaderImg:{},
    imag: {},
    id:{},
    
 
    selected: true,
    selected1: false,
    
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },

 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showNavigationBarLoading()
    // console.log(options);
    var name = options.name;
    // console.log(name)
    this.data.name = name;
    var imge = options.img;
    this.data.imge = imge;


    // console.log(imge);
    // let that=this;
    this.setData({
      imag: this.data.imge
    })
    

    wx.request({
      url: app.globalUrl.manhuaUrl + '/wbcomic/comic/comic_show?comic_id='+options.id+'&create_source=h5&_type=h5', // 漫画接口

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data.data.chapter_list[0])
       
        // console.log(res.data.data.comic);
        // console.log(res.data.data.chapter_list);
        // console.log(res.data.data.comic_tag);
       
        var arr1 = []
        for (var i = 0; i < res.data.data.comic_tag.length; i++) {
          if (i <= 2) {
            //头部标签
            arr1.push(res.data.data.comic_tag[i])
           

          }
        }
        var arr2=[]
        for (var i = 0; i < res.data.data.chapter_list.length; i++) {
          if (i <= res.data.data.chapter_list.length) {
            //头部标签
            arr2.push(res.data.data.chapter_list[i].chapter_id)


          }
        }
        // console.log(arr2)
      
      



        this.setData({
          HeaderDetail: res.data.data.comic,
          HeaderTag: arr1,
          HeaderImg: res.data.data.chapter_list,
          id: arr2
               

        })
        wx.hideNavigationBarLoading()
        


        

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
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