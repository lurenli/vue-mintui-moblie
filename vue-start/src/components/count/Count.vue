<template>
        <div class="count">
            <h2>{{msg}}</h2>
            <hr/>
            <h3>{{$store.state.count}}</h3>
          <div>
	        <button @click="$store.commit('add',10)">+</button>
	        <button @click="$store.commit('reduce',4)">-</button>
	      </div>
	       <label class="col-sm-2 control-label">用户名</label>
	        <div class="col-sm-10">
	            <input type="text"  v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username">
	             <button type="button" v-on:click="submit" class="btn btn-default">提交</button>
	        </div>
        </div>
</template>
<script>
export default{
	 props:["placeholder"],
     data(){
        return{
            msg:'Hello Vuex',
            username:"1234"
        }
    },
    methods:{
    	userNameChange(){
              this.$store.state.user_name = this.username;
              //console.log(this.$store.state.user_name)
        },
        submit(){
               this.$store.commit("showUserName");
            }
     },
    computed:{
        count(){
            return this.$store.state.count;
        }
    }

}
</script>
<style> 
.count{margin-top:49px;}
button{width:50px;height:30px;font-size:20px;color:red;}
</style>