let config = {
    Name: "木糖纯Official", // 主页名字
  
    BiliLiveRoomID: "8643223", // 直播间id
  
    NetEaseMusicId: "", // 网易云音乐id
    QQMusicId: "", // QQ音乐id
    Footer: "Github",
  
    Cursor: false, // 使用自定义光标图片
  
    LanguageCategories: ["日语", "英语"], // 语言分类
    RemarkCategories: ["原创", "合唱"], // 标签分类
  
    BannerTitle: "木糖纯Official", // banner 标题
  
    BannerContent: [
    ],
  
    // 自定义按钮 （可以复制生成更多）
    CustomButtons: [
      {
        link: "https://2some.one/54191665?tag=0",
		  name: "匿名提问箱",
        image: "/assets/icon/pome.png",
      },
      {
        link: "https://weibo.com/",
        name: "微博",
        image: "/assets/icon/weibo.png",
      },
      /*{
        link: "https://twitter.com",
        name: "Twitter",
        image: "/assets/icon/th.png",
      },*/
    ],
};


module.exports = {
    config
}