class ArticleDao{
  constructor(url){
    this.storageKeyName = 'articleList';
  } 

  /**
   * 查询所有记录
   */
  getAllArticle(){
    var data = wx.getStorageSync(this.storageKeyName);
    if(!data){
      data = require("../data/data.js");
      wx.setStorageSync(this.storageKeyName, res.articleList);
    }

    return data;
  }

  /**
   * 保存所有记录
   */
  savaAllArticle(articleList){
    wx.setStorageSync(this.storageKeyName, res.articleList);
  }

  /**
   * 获取单个文章
   */
  getArticleById(id){
    var allArticle = this.getAllArticle();
    var len = allArticle.length;

    for(var i = 0; i < len; i++){
      if(allArticle[i].id == id){
        return allArticle[i];
      }
    }
  }
};

export {ArticleDao}