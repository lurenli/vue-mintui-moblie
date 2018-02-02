<template>
 <div class="me">
		<!-- 头像部分 -->
		<div class="headimage">
			<img src="../../assets/me.jpg" class="clear" @click="sheetVisible = !sheetVisible">
			<h2>{{ persons.name }}</h2>
		</div>
		<!-- 弹出操作栏（用于更换头像和LOGO） -->
		<mt-actionsheet
  			:actions="actions"
  			v-model="sheetVisible">
		</mt-actionsheet>
		<!-- 个人信息展示 -->
		<ul class="personinfo">
			<li @click="sheetVisible = !sheetVisible">&nbsp;&nbsp;<i class="icon-spinner"></i>&nbsp;应用LOGO更换<i class="arrow"></i></li>
			<li>&nbsp;&nbsp;<i class="icon-phone"></i>&nbsp;手机 : 12345678910<i class="arrow"></i></li>
			<li>&nbsp;&nbsp;<i class="icon-email"></i>&nbsp;邮箱 : 66666666@qq.com<i class="arrow"></i></li>
			<li>&nbsp;&nbsp;<i class="icon-point-right"></i>&nbsp;自我评价 : 帅气英人,英姿飒爽<i class="arrow"></i></li>
		</ul>
		<!-- 退出按钮 -->
		<router-link to="/"><div class="leave-btn"><i class="icon-switch"></i>&nbsp;&nbsp;&nbsp;安全退出</div></router-link>
	</div>
</template>


<script>
  export default{
		data() {

			let actions = [
				{name:'拍照'}, 
				{name:'从手机相册中选取'}
			]
			let sheetVisible = false
			return {
				sheetVisible, 
				actions,
				persons:{name:"lm"}

			}
		}
	}
</script>
<style scpoed>
.me{
        position: absolute;
        top: 40px;
        width:100%;
        text-align: left;
	}
	.headimage{
		height: 70px;
		border-bottom: 1px solid #efefef;
		background-color: #ffffff;
		position: relative;
	}
	.headimage img{
		float: left;
		width: 60px;
		height: 60px;
		border-radius: 5px;
		margin: 5px 5px 0 10px;
	}
	.headimage h2{
		position: absolute;
		top: 5px;
		left: 80px;
		font-size: 20px;
		font-weight: 1000;
	}
	.headimage p{
		margin-top:-5px;
		color: #c1c1c1;
		position: absolute;
		left: 80px;
		bottom: 10px;
	}
	.personinfo li{
		width: 100%;
		height: 30px;
		padding: 5px 0;
		background-color: #ffffff;
		border-bottom: 1px solid #efefef;
		line-height: 30px;
		position: relative;
		font-size: 16px;
		color: #6E6D6D;
	}
	.arrow{
		border: 2px solid #c8c8cd;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        top: 50%;
        right: 20px;
        position: absolute;
        width: 5px;
        height: 5px;
        -webkit-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
	}
	.leave-btn{
		width: 200px;
		height: 50px;
		margin: 50px auto;
		background-color:green;
		line-height: 50px;
		color: #ffffff;
		font-size: 20px;
		text-align: center;
		border-radius: 5px;
		box-shadow: 1px 1px 2px #efefef;
	}
</style>

