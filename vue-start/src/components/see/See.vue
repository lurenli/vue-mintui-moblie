<template>
    <div class="see">
        <!-- 订单状态部分 -->
        <mt-navbar class="page-part" v-model="selected" fixed>
           <mt-tab-item id="movies">电影</mt-tab-item>
           <mt-tab-item id="food">美食</mt-tab-item>
           <mt-tab-item id="girl">美女</mt-tab-item>
           <mt-tab-item id="news">新闻</mt-tab-item>
           <mt-tab-item id="video">视频</mt-tab-item>
           <mt-tab-item id="music">音乐</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
		  <mt-tab-container-item id="movies">
		  	<ul class="movie-list">
		  		<li  class="movie-li" v-for="n in item">
		     		<img :src="n.img">
		     		<div class="list-right">
			     		<h4>{{n.nm}}</h4>
						<p>剧情 ：<a href="#" class="movie-a">{{n.scm}}</a></p>
						<p>主演 : <a href="#" class="movie-a"> {{n.star}}</a></p>
						<p>类型 : <a href="#" class="movie-a">{{n.cat}}</a></p>
					</div>
		        </li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item class="tab1"  :items="foodlist" id="food">  
              <ul v-for="excl in foodlist" :key="excl.item_title">
                <li class="one">
                	<div class="row">
	                    <div class="grid-content bg-purple">
	                      <div class="img_panel"><img :src="excl.L_Img"/></div>
	                      <div class="info-panel">
	                        <div class="item-title">{{ excl.item_title }}</div>
	                        <div class="item-info">
	                          <span class="item-tag">{{ excl.item_tag }}</span>
	                          <span class="item-other">{{ excl.item_other }}</span>
	                        </div>
	                      </div>
	                    </div>
                    </div>
                </li>
                <li class="two">
                    <div class="grid-content bg-purple">
                      <div class="info-panel">
                        <div class="item-title">{{ excl.item_title2 }}</div>
                        <div class="item-info">
                          <span class="item-tag">{{ excl.item_tag2 }}</span>
                          <span class="item-other">{{ excl.item_other2 }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="grid-content bg-purple">
                      <div class="img-panel"><img :src="excl.S_Img"/></div>
                    </div>
                </li>
                <li class="two gap">
                    <div class="grid-content bg-purple">
                      <div class="info-panel">
                        <div class="item-title">{{ excl.item_title3 }}</div>
                        <div class="item-info">
                          <span class="item-tag">{{ excl.item_tag3 }}</span>
                          <span class="item-other">{{ excl.item_other3 }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="grid-content bg-purple">
                      <div class="img-panel"><img :src="excl.S_Img2"></div>
                    </div>
                </li>
              </ul> 
            </mt-tab-container-item>  

		  <mt-tab-container-item id="girl" >
		    <ul>
		  		<li  v-for="n in girlslist" class="girlslist">
			     	<img :src="n.url" class="mm">
		        </li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="news">
		     <ul class="news-ul">
		  		<li  v-for="n in newslist" class="newslist">
		  			<h4>{{n.text}}</h4>
			     	<img :src="n.image1" class="bj">
		        </li>
		    </ul>
		  </mt-tab-container-item>
		   <mt-tab-container-item id="video">
		     <ul class="video-ul">
		  		<li  v-for="n in newslist" class="video">
			     	<video  :src="n.videouri" id="video" onclick="this.play()" onMouseOut="this.pause()"  controls="controls"  onerror="this.style.display='none'" this.onerror=null>
					</video>
		        </li>
		    </ul>
		  </mt-tab-container-item>
          <mt-tab-container-item id="music">
		    <my-list :items="hotdiss"></my-list>
            <ul class="music-ul">
		  		<li  v-for="n in musiclist" class="music-li">
			     	<img :src="n.albumpic_big" class="music-img"/>
			     	<span>{{n.songname}}</span>
		        </li>
		    </ul>
		  </mt-tab-container-item>
		</mt-tab-container>
    </div>
</template>
<script type="text/javascript">
import musicjson from '@/data/music.json';
import foodlist from '@/data/foodlist.json';
import music from '@/components/music/Music';
import { api } from '@/global/api';
export default{
    	components:{
    	   "my-list":music
 	    },
        data(){
            return {
            	selected:'movies',
	            item:[],
	            girlslist:[],
	            newslist:[],
	            hotdiss:musicjson.data.hotdiss.list,
	            musiclist:[],
	            foodlist:foodlist.exclusiveData
            }
        },
        methods:{
	        movies:function(){
			  	var url = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000'
			  	this.$http.get(url).then(res => {
		            this.item = res.data.data.movies
		            //console.log(res.data.data.movies)
				}, res => {
	    	       console.log("数据请求失败")
				})
		    },
		     girl:function(){
			  	var url = 'http://www.apiopen.top:88/meituApi?page=1'
			  	this.$http.get(url).then(res => {
                     this.girlslist = res.data.data
				}, res => {
	    	       console.log("数据请求失败")
				})
		    },
		    news:function(){
			  	var url = 'http://www.apiopen.top:88/satinApi?type=1&page=1'
			  	this.$http.get(url).then(res => {
                     this.newslist = res.data.data
				}, res => {
	    	       console.log("数据请求失败")
				})
		    },
		    music:function(){
		    	var url = 'https://route.showapi.com/213-4?showapi_appid=31967&topid=5&showapi_sign=7c45d428c1024a5e88c3cbc78a506646'
		    	this.$http.get(url).then(res => {
		    		this.musiclist = res.data.showapi_res_body.pagebean.songlist
                     //console.log(res.data.showapi_res_body.pagebean.songlist)
				}, res => {
	    	       console.log("数据请求失败")
				})
		    }
	    },
		   created(){
		   	this.movies();
		   	this.girl();
		   	this.news();
		   	this.music(); 	
		   }
}
</script>
<style type="text/css">
    .movie-a{color:blue;}
    .see{
        position: absolute;
        top: 40px;
        height: 100%;
        width:100%;
    }
    .page-part{
        z-index: 99;
    }
    .order-list{
        position: relative;
        top: 49px;
        height: calc(100% - 144px);
        overflow: scroll;
    }
    .order-item img{
        width: 100px;
        height: 100px;
        float: left;
    }
    .order-item h4{
        padding-top: 20px;
        margin-left: 110px;
    }
    .order-item{
        height: 100px;
        position: relative;
        top: 5px;
    }
    .order-item p{
        position: absolute;
        bottom: 10%;
        color: #c1c1c1;
        left: 110px;
    }
    .mint-navbar.is-fixed{
        top: 40px;
    }
    .mint-navbar .mint-tab-item.is-selected{
        margin-bottom: 0;
    }
    .mint-tab-container{margin-top:49px;padding:0 15px;}

    .movie-li{margin:10px 0;height:235px;overflow:hidden}
    .movie-li  img{display:block;width:165px;float:left;}
    .movie-li .list-right{float:left;width:210px;height:100%;margin-left:15px;}
    .movie-li .list-right h4{color:red;}
    .movie-li .list-right p{color:#000;font:14px/25px "";}
    .bj{width:100%;}
    .mm{width:100%;}
    .newslist{margin-top:10px;}
    #video{width:100%;}
    .news-ul{height:10290px;}
    .video-ul{height:3000px;}
    .music-li{width:50%;float:left;text-align:center;}
    .music-img{width:100%;}
    .see .tab1 .item-title{
	  padding-top: 9px;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	  overflow: hidden;
	  font-weight: 700;
	  font-size: 18px;
	  line-height: 24px;
	  color: #111;
	}
    .see .tab1 .item-info{
	  height:25px
	} 
    .see .tab1 .item-info .item-tag{
  	  padding: 0 3px;
	  border: 1px solid #d2a156;
	  color: #d2a156;
	  border-radius: 2px;
	  height: 25px;
	  line-height: 25px;
	  box-sizing: border-box;
	  float:left;
	}
    .see .tab1 .item-info .item-other{
      float:right;
	  right: 0;
	  bottom: 0;
	}


</style>