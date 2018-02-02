<template>
  <div class="list">
      <div class="page-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="slide1"></mt-swipe-item>
                <mt-swipe-item class="slide2"></mt-swipe-item>
                <mt-swipe-item class="slide3"></mt-swipe-item>
            </mt-swipe>
      </div>
      <div class="list-content">
        <div class="list-item" v-for="item in items">
            <div class="list-img">
                <img :src="item.imgurl" lazy="loaded">

                <div class="listen-count">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg0NDkwNzkwNTEzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTI3LjA0Mzk3NiA3MzkuOTQzNTAybC01OC41NTg2OTcgNy40MTU5Yy0wLjc3MzYxOS02LjA5Njg1OC0zNy42NzMwMTgtMzExLjEyNjAxNyAxMjEuMzkyNzY4LTQ5MS4wMzE0MzMgNjYuNzk0MjY1LTc1LjU3NTI1NiAxNjguMTY3MDcxLTEyOS4wODI5MTQgMzIxLjMxOTE3LTEyOS4wODI5MTQgMTU4LjAxODk0MyAwIDI2MS4yMTIyMSA1NC45MTY3NSAzMjguMTg3NjAxIDEzMi4wODUyOTRDOTk3LjQwNDc4NCA0NDEuMzc1NDk5IDk1My45NTMxNTYgNzQ3LjA0MTE1NCA5NTMuOTUzMTU2IDc0Ny4wNDExNTRsLTU4LjQ2NjYtOC4yODA1OTRjMC40MDkzMjItMi43NzUyMDYgMzguMDM2MjkxLTI4MC45MTM5MjQtMTAwLjY5MTI4My00NDAuNzU0MzUzLTY0LjM4MTMwOS03NC4xNjQxMTctMTU5Ljc5MzM1Ni0xMTEuNzQ3MDgzLTI4My41OTgwNTctMTExLjc0NzA4My0xMTkuODQ2NTUyIDAtMjEzLjA3Mzg0IDM2LjcxODI3My0yNzcuMDkyODk5IDEwOS4xNTMwMDJDOTMuNTU2MjgxIDQ1NC40MzM5MSAxMjYuNjgwNzAyIDczNi44OTUwNzMgMTI2Ljk5NzkyNyA3MzkuNjI1MjU0TDEyNy4wNDM5NzYgNzM5Ljk0MzUwMiIgcC1pZD0iMjI5OCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDYuMzY4ODY2IDg5NC42Njg0MjMgNzE3LjgxMDkyNCA4OTQuNjY4NDIzIDcxNy44MTA5MjQgNTY5Ljk2NjIwMyA4MDYuMzY4ODY2IDU2OS45NjYyMDMgODA2LjM2ODg2NiA4OTQuNjY4NDIzIDgwNi4zNjg4NjYgODk0LjY2ODQyM1oiIHAtaWQ9IjIyOTkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMzA0LjU5NTc4OCA4OTQuNjY4NDIzIDIxNi4wMzY4MjMgODk0LjY2ODQyMyAyMTYuMDM2ODIzIDU2OS45NjYyMDMgMzA0LjU5NTc4OCA1NjkuOTY2MjAzIDMwNC41OTU3ODggODk0LjY2ODQyMyAzMDQuNTk1Nzg4IDg5NC42Njg0MjNaIiBwLWlkPSIyMzAwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" alt="">
                  <span data-v-15c92d87="">56.4万</span>
                </div>
            </div>
            <div class="list-info">
              <p class="list-name">{{item.dissname}}</p>
              <p class="list-author">Tyrone</p>
           </div>
        </div>
      </div>

     
      
  </div>
</template>

<script>

export default {
  props:["title","items"],
  name: 'music',
  data(){
    return {
     

    }
  }
    //mounted(){
    // axios
    //   .get(
    //     'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1498513512062&jsonpCallback=_jsonp0i40uyqxf2ytcv51uapb40lik9',
    //     // 'data/music.json',
    //     {
    //       //  headers: {
    //       //     // 'Content-Type': 'application/x-www-form-urlencoded'
    //       //     'authority':'c.y.qq.com'
    //       //   },
    //         'auth':'c.y.qq.com'
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
 // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list{height:1710px}
    .page-swipe{height:168px;}
    .slide1 {
        background: url(../../image/T003R720x288M000002mryCr3VtdR3.jpg) center center no-repeat;
        background-size: 100% 100%;
        /*color: #fff;*/
    }

    .slide2 {
        background: url(../../image/T003R720x288M000003utrAc4A7FwF.jpg) center center no-repeat;
        background-size: 100% 100%;
        /*color: #000;*/
    }

    .slide3 {
        background: url(../../image/T003R720x288M000004Zu0uz1PYd2t.jpg) center center no-repeat;
        background-size: 100% 100%;
        /*color: #fff;*/
    }
   .list-content .list-item .list-info {
      text-overflow: ellipsis;
      white-space: nowrap;
  }
 
  .list-content{
  	margin-top:10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .list-item{
    width: 50%;
    cursor: pointer;
  }
  .list-img{
    position: relative;
  }
  .list-img img{
    width: 100%;
  }
  .list-item .list-img .listen-count{
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #fff;
    font-size: 12px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
  }
  .list-item .list-img .listen-count img{
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 3px;
  }

  .list-item .list-img .listen-count span{

    font-size: 10px;

  }
  .list-info{
    padding: 0 5px;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .list-info .list-name{
    text-align: left;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow:ellipsis;
  }
  .list-info .list-author{
    text-align: left;
    font-size: 12px;
    color: #777;
  }
  .AllTheSong {
        width: 100%;
        /*color: rgba(255, 255, 255, 0.8);*/
        font-size: .8rem;
    }

    .AllTheSong h5 {
        margin-left: .5rem;
        margin-bottom: .2rem;
    }

    .AllTheSong ul {
        width: 100%;
        /*display: flex;*/
        margin: 0 .1rem 0 .1rem;
    }

    .AllTheSong ul li {
        float: left;
        width: 50%;
        height: 50%;
    }

    .AllTheSong ul li img {
        width: 98%;
        height: 100%;
    }

    .AllTheSong ul li span {
        display: inline-block;
        width: 9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-indent: .2rem;
    }
</style>
