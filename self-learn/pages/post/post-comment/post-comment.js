// pages/post/post-comment/post-comment .js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [{
        id: 1,
        username: '青石',
        avatar: '/images/avatar/avatar-3.png',
        createTime: '1484723344',
        content: {
          txt: ' 那一年的毕业季，我们挥挥手，来不及说再见，就踏上了远行的火车。',
          img: ["/images/comment/train-1.jpg", "/images/comment/train-2.jpg", "/images/comment/train-3.jpg"],
          audio: null
        }
      }, {
        id: 2,
        username: '水清',
        avatar: '/images/avatar/avatar-2.png',
        createTime: '1481018319',
        content: {
          txt: '夏日的蝉鸣与夜晚的火车，时长会在未来无数的日子里不断的在我耳边响起，难以忘怀',
          img: [],
          audio: null,
        }
      },
      {
        id: 3,
        username: '赤墨',
        avatar: '/images/avatar/avatar-1.png',
        createTime: '1484496000',
        content: {
          txt: '时光的湮染，自然的吞噬，让太多的老火车站也消失得无影无踪',
          img: ["/images/comment/train-4.jpg", ],
          audio: null,
        }
      },
      {
        id: 4,
        username: '林白',
        avatar: '/images/avatar/avatar-4.png',
        create_time: '1484582400',
        content: {
          txt: '',
          img: [],
          audio: {
            url: "http://123",
            timeLen: 8
          },
        }
      }
    ],
    useKeyboardFlag: true,
    keyboardInputValue: '',
    sendMoreMsgFlag: false,
    chooseFiles: []
  },

  onPreviewImg: function(event) {
    var imgId = event.currentTarget.dataset.imgId;
    var commentId = event.currentTarget.dataset.commentId;
    console.log("评论ID: " + commentId);
    var imgs = this.data.comments[0].content.img;

    wx.previewImage({
      current: imgs[imgId],
      urls: imgs,
    })
  },

  switchInputType: function(event) {
    this.setData({
      useKeyboardFlag: !this.data.useKeyboardFlag
    })
  },

  bindCommentInput: function(event) {
    var val = event.detail.value;
    console.log(val);
  },

  sendMoreMsg: function(event) {
    this.setData({
      sendMoreMsgFlag: !this.data.sendMoreMsgFlag
    })
  },

  chooseImage: function(event) {
    var imgArray = this.data.chooseFiles;
    var leftCount = 3 - imgArray.length;
    if (leftCount <= 0) {
      return;
    }

    var sourceType = [event.currentTarget.dataset.category];
    var that = this;
    wx.chooseImage({
      count: leftCount,
      sourceType: sourceType,
      success: function(res) {
        that.setData({
          chooseFiles: imgArray.concat(res.tempFilePaths)
        })
      },
    })
  },

  deleteImage: function(event) {
    var index = event.currentTarget.dataset.idx;
    that = this;
    that.data.chooseFiles.splice(index, 1);
    that.setData({
      chooseFiles: that.data.chooseFiles
    })
  },

  submitComment: function(event) {

  },

  showCommitSuccessToast: function() {
    wx.showToast({
      title: '评论成功',
      duration: 1000,
      icon: 'success'
    })
  },

  resetAll: function() {
    this.setData({
      keyboardInputValue: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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