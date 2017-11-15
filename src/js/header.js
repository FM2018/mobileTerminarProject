var Header = {
	props : {
		content : {
			required : true,
			type : String,
			default : "造作ZAOZUO"
		},
		hasBtn : {
			type : Boolean,
			default : false
		}
	},
	data() {
		return {
			name : "xiaomin"
		}
	},
	methods : {
		fun() {
			this.content = "造作ZAOZUO"
		}
	},
	template : `<header>
					<h3>{{content}}</h3>
					<a href="javascript:;" v-if="hasBtn" class="btn" @click="fun">编辑</a>
				</header>`,
	// //实例化之前
	// beforeCreate () {
	// 	console.log(this.name);
	// },
	// //实例化之后
	// created () {
	// 	console.log(this.name);
	// },
	// //加载完成前
	// beforeMount () {
	// 	console.log("加载之前");
	// },
	// //加载完成之后，还需要更新完成，页面才会显示内容
	// mounted () {
	// 	console.log("加载完成");
	// },
	// //更新之前
	// beforeUpdate () {
	// 	console.log("更新之前");
	// 	alert("更新之前");
	// },
	// //更新完成，页面显示
	// updated () {
	// 	console.log("更新完成");
	// },
	// //卸载前
	// beforeDestroy () {
	// 	console.log("删前留名");
	// },
	// //卸载之后，一般情况不会触发
	// destroied () {
	// 	console.log("删除成功");
	// }

}

export {Header}