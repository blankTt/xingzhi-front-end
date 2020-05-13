// pages/Release/Release.js
var dataObj = require("../../data/act_list.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // actiList: [],
  },

  // 获取活动列表
  // getActiList() {
  //   let that = this
  //   wx.request({
  //     url: 'https://scuxingzhi.top:8080/activity/info',
  //     data: {},
  //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //     // header: {}, // 设置请求的 header
  //     success: function (res) {
  //       // success
  //       that.setData({
  //         actiList: res.data,
  //       })
  //     },
  //     fail: function () {
  //       // fail
  //     },
  //     complete: function () {
  //       // complete
  //     },
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getActiList()
    var that = this;
    that.setData({
      actList: dataObj.actList
    })
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfoAvatar: res.userInfo.avatarUrl,
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