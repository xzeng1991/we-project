// pages/post/post.js
import {ArticleDao} from "../../db/ArticleDao.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 跳转文章详情页
   */
  onShowDetail(event){
    var articleId = event.currentTarget.dataset.postId;
    console.log("文章ID: " + articleId);
    /*wx.navigateTo({
      url: 'post-detail/post-detail?id=' + articleId,
    })*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleDao = new ArticleDao();
    this.setData({
      articleList: articleDao.getAllArticle()
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