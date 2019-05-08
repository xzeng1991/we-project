// pages/movie/movie.js
var util = require('../../utils/util.js')
var data = require("../../data/movie.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: {},
    comingSoons: {},
    top250s: {}
  },

  getMovieListData: function(url) {
    var that = this;
    wx.request({
      url: url,
      method: 'POST',
      header: {
        "content-type": "json"
      },
      success: function(res) {
        //console.log('返回: ' + JSON.stringify(res.data));
        that.processDoubanData(res.data.data)
      },
      fail: function(error) {
        console.log(error);
      }
    })
  },

  processDoubanData: function(data) {
    console.log('返回: ' + JSON.stringify(data.inTheaters));
    //this.setData(moviesDouban.data);
    this.setData({
      inTheaters: {
        categoryTitle: '正在热映',
        movies: data.inTheaters
      }
    });
    this.setData({
      comingSoons: {
        categoryTitle: '即将上映',
        movies: data.comingSoons
      }
    });
    this.setData({
      top250s: {
        categoryTitle: '豆瓣top250',
        movies: data.top250s
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var movieIndexUrl = app.globalData.movieIndexUrl;

    this.getMovieListData(movieIndexUrl);
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