export default {
	template : `<div>
					<h3>商品详情页</h3>
					<div>
						这是商品id为 xxx 的商品详情
					</div>
					<a @click="fun()">点击</a>
				</div>`,
	methods : {
		fun() {
			console.log(this.$route);
		}
	}
}