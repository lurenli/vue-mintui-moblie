//接口配置
//把全体接口封装在的前端配置文件（序号与接口文档一一对应），多个环境配置时可快速切换整站式的全部接口，不用逐个页面去改。
const config = require('../../config');

let url = {
    //staticPath:config.dev.staticPath,       //开发环境静态资源路径  
    staticPath: process.env.NODE_ENV !== 'development' ?  config.build.staticPath: config.dev.staticPath
};

//----------------请注意：如果正式环境，不需要本地json数据模拟，请删除以上代码和api中的模拟接口。----------------

export const api = {

    //'login':'http://localhost:80/dataJson/login.json',//ngxin
    'itemlist':url.staticPath+'dataJson/itemlist.json',//获取头部轮播数据
    'itemlist2':url.staticPath+'dataJson/itemlist2.json',
    'i_middlelist':url.staticPath+'dataJson/i_middlelist.json',//获取精选热门电影数据
    "i_likelist":url.staticPath+"dataJson/i_likelist.json",  //获取猜你喜欢数据  
    "q_exclusivelist":url.staticPath+"dataJson/q_exclusivelist.json",  //获取专属优惠数据，获取精选数据
}
