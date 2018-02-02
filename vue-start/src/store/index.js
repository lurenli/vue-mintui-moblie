import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        count:0,
        user_name:"小米"
    },
    getters:{
	 
	},
    mutations :{
       add(state,n){
            state.count+=n;
        },
        reduce(state,n){
            state.count-=n;
            if(state.count<=0){
            	state.count = 0
            }
        },
        showUserName(state){
            alert(state.user_name);
        }
    },
    actions:{
		
    }
});
