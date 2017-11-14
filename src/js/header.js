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
		return {}
	},
	template : `<header>
					<h3>{{content}}</h3>
					<a href="javascript:;" v-if="hasBtn" class="btn">编辑</a>
				</header>`
}

export {Header}