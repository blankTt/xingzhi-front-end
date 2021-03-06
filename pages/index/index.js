// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    actiList: [],
    actiStatus: 0,
  },
  /**获取轮播图图片数据 */
  getSwiperList() {
    let that = this
    var jsonData = require('../../data/swiper_image.js')
    that.setData({
      swiperList: jsonData.swiperList,
    })
  },
  /**获取活动信息 */
  getActiList() {
    let that = this
    wx.request({
      url: 'https://scuxingzhi.top:8080/activity/info',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        that.setData({
          actiList: res.data,
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getActiList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
