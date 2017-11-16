var Carousel = {
	props : ["imagesList"],
	data() {
		return {}
	},
	template : `<div id="carousel">
					<ul>
						<li v-for="image in imagesList">
							<img v-bind:src="image" />
						</li>
					</ul>
				</div>`
}




// `<div class="swiper-container">
// 				    <div class="swiper-wrapper">
// 				        <div class="swiper-slide" v-for="image in imagesList">
// 							<img v-bind:src="image" />
// 				        </div>
// 				    </div>
// 				    <!-- 如果需要分页器 -->
// 				    <div class="swiper-pagination"></div>
				    
// 				    <!-- 如果需要导航按钮 -->
// 				    <div class="swiper-button-prev"></div>
// 				    <div class="swiper-button-next"></div>
// 				</div>`

export {Carousel}