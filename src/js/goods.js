 export default {
	props : {
		goodsList : {
			type : Array,
			require : true
		}		
	},
	data() {
		return {}
	},
	template : `<ul class="goods-list">
						<li v-for="goods in goodsList">
							<a><img v-bind:src="goods.image" /></a>
							<div class="goods-content">
								<h3>商品名称：{{goods.name}}</h3>
								<p>商品价格：{{goods.price}}</p>
							</div>
						</li>
					</ul>`
}