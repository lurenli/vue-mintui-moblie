<template> 
 <div id="users">
   <ul>
    <li>
      <img v-lazy.container="item.src" class="img" v-for="item in list">
    </li>
  </ul>
 </div>
</template>
<script>
export default {
 data(){
 	return{
 		list:[
            {src:require("../../assets/ss.jpg")},
            {src:require("../../assets/sj.jpg")},
            {src:require("../../assets/yy.jpg")},
            {src:require("../../assets/bb.jpg")},
            {src:require("../../assets/cc.jpg")},
            {src:require("../../assets/mm.jpg")}
        ]
 	}
 }
}
</script>
<style scpoed>
#users{
      position: absolute;
      top: 40px;
      height: 100%;
      width:100%;
}
#users ul{ height: 100%;}
#users ul li{ height: 100%;}
</style>

