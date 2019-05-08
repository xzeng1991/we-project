// pages/post/post-detail/post-detail.js
import { ArticleDao } from "../../../db/ArticleDao.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
     * 点赞
     */
  onUpTap(event) {
    var articleId = event.currentTarget.dataset.articleId;
    console.log("文章ID: " + articleId);
    
  },

  /**
     * 评论
     */
  onCommentTap(event) {
    var articleId = event.currentTarget.dataset.articleId;
    console.log("文章ID: " + articleId);
    wx.navigateTo({
      url: '../post-comment/post-comment?id=' + articleId,
    })
  },

  /**
     * 收藏
     */
  onCollectTap(event) {
    var articleId = event.currentTarget.dataset.articleId;
    var articleDao = new ArticleDao();
    var article = articleDao.getArticleById(articleId);

    this.setData({
      "article.collectStatus" : true,
      "article.collectNum": 1
    });

    wx.showToast({
      title: article.collectStatus ? '收藏成功' : '取消成功',
      duration: 1000,
      icon: 'success',
      mask: true
    })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = options.id;
    var articleDao = new ArticleDao();
    var article = articleDao.getArticleById(articleId);

    this.setData({
      article: article
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详 情',
    })
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