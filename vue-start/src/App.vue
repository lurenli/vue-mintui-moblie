<template>
  <div id="app">
  	<mt-header :title="value" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back" >返回</mt-button>
	  </router-link>
      <mt-button icon="more" slot="right" class="b-right"></mt-button>
    </mt-header>

    <mt-tabbar v-model="value" fixed >
		  <mt-tab-item id="首页">
		     <router-link to='/' exact active-class="active">
		   <i class="icon-home"></i>
		     <br>
		     首页
		     </router-link>   
		  </mt-tab-item>
		  <mt-tab-item id="我们">
		     <router-link to='/users'>
		   <i class="icon-users"></i>
		    <br>
		   我们
		     </router-link>
		  </mt-tab-item> 
		  <mt-tab-item id="看点">
		     <router-link to='/see'>
		 <i class="icon-compass"></i>
		   <br>
		    看点
		     </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		     <router-link to='/me'>
		  <i class="icon-star"></i>
		    <br>
		   我的
		    </router-link>
		  </mt-tab-item>
		  <mt-tab-item id="计算">
		     <router-link to='/count'>
		  <i class="icon-star"></i>
		    <br>
		   计算
		    </router-link>
		  </mt-tab-item>
    </mt-tabbar>

     <router-view></router-view>
  </div>
</template>


<script>
 export default {
  data() {
    return {
       value: "友情岁月"
    }
  }
}
</script>

<style>

html,body{
        height: 100%;
    }
#app{
        height: 100%;
    }
.b-right{right:10px;}

.mint-tab-item a{color:#333;font:14px/18px "";
        display: block;
        width: calc(100% / 5);
        height: 55px;
        position: absolute;
        bottom: 0;
}
.mint-tab-item-label .router-link-exact-active{color:#26a2ff;}

.mint-tab-item-label {
    color: inherit;
    font-size: 12px;
}
.mint-tabbar.is-fixed {
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
  }
.mint-tabbar{height:55px;}
@font-face {
      font-family: 'icomoon';
      src:  url('assets/fonts/icomoon.eot?7uuhsr');
      src:  url('assets/fonts/icomoon.eot?7uuhsr#iefix') format('embedded-opentype'),
        url('assets/fonts/icomoon.ttf?7uuhsr') format('truetype'),
        url('assets/fonts/icomoon.woff?7uuhsr') format('woff'),
        url('assets/fonts/icomoon.svg?7uuhsr#icomoon') format('svg');
      font-weight: normal;
      font-style: normal;
    }

    [class^="icon-"], [class*=" icon-"] {
      /* use !important to prevent issues with browser extensions that change fonts */
      font-family: 'icomoon' !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      font-size:20px;
      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-home:before {
      content: "\e900";
    }
    .icon-compass:before {
      content: "\e949";
    }
    .icon-users:before {
      content: "\e972";
    }
    .icon-star:before {
      content: "\e9d9";
    }
    .icon-phone:before {
      content: "\e942";
      color:red;
    }
    .icon-spinner:before {
      content: "\e983";
      color:red;
    }
    .icon-point-right:before {
      content: "\ea04";
      color:red;
    }
    .icon-email:before {
      content: "\ea86";
      color:red;
    }
    .icon-switch:before {
     content: "\e9b6";
     color:red;
    }




</style>
