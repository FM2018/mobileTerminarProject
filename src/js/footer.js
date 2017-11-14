var Footer = {
	props : ["navList"],
	data(){
		return {}
	},
	template : `<footer>
					<ul>
						<li v-for="nav in navList">
							<a href="javascript:;">{{nav}}</a>
						</li>
					</ul>
				</footer>`
}
export {Footer}