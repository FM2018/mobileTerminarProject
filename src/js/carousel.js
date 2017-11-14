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
export {Carousel}