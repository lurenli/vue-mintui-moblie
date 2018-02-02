<template>
   <div id="app-container">
     <mt-swipe  :auto="4000">
          <mt-swipe-item><img src="../assets/100.jpg" class="banner"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/101.jpg" class="banner"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/102.jpg" class="banner"></mt-swipe-item>
          <mt-swipe-item><img src="../assets/103.jpg" class="banner"></mt-swipe-item>
    </mt-swipe>
    <ul class="main">
      <li v-for="item in list" class="list">
          <img  :src="item.src" class="img">
          <div class="text">{{item.text}}</div>
      </li>
    </ul>
   
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
        list:[
            {text:'帅气英人,英姿飒爽,站在人群中吸烟的他,我们都叫他jj-俊俊',src:require("../assets/jj.jpg")},
            {text:'可爱惹人,桃花运伴一生,高子不高,但情商至极,小魔王不是盖的',src:require("../assets/xx.jpg")},
            {text:'相貌平平,乐于助人能够和大家打成一片,不希望自己多好,只愿大家安好,',src:require("../assets/lm.jpg")},
            {text:'帅气英人,英姿飒爽,站在人群中吸烟的他,我们都叫他jj-俊俊',src:require("../assets/jj.jpg")},
            {text:'可爱惹人,桃花运伴一生,高子不高,但情商至极,小魔王不是盖的',src:require("../assets/xx.jpg")},
            {text:'相貌平平,乐于助人能够和大家打成一片,不希望自己多好,只愿大家安好,',src:require("../assets/lm.jpg")}
        ],
    }
  }

}
</script>

<!--scoped 局部样式css-->
<style type="text/css">
#app-container{
      position: absolute;
      top: 40px;
      height: auto;
      width:100%;
}
.mint-swipe{
        width: 100%;
        height:168px;
        position:fixed;
    }
.swipe{
     height:168px;
     overflow: visible;
}
.banner{
    width: 100%;
    height:168px;
}
.main{padding-left:10px;margin-top:175px;height:auto;}
.main .list{height:90px;width:100%;margin-top:10px;background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#b8c4cb), to(#f6f6f8))}
.main .list .img{width:90px;height:90px;display:block;float:left;}
.main .list .text{font:14px/30px "";color:#CD1076;float:left;width:300px;padding:0 10px;height:90px;}


</style>
