<template>
    <!-- category product description -->
	<section class="category-product-description clear-cache">
		<div class="container">
			<div class="ctg-pd-description-content">
				<div class="ctg-pd-description_post" v-html="main_category.seo_h4">
					<h2>
						<strong>Make it the centrepiece of your living room</strong>
					</h2>
					<p>No matter how big or small your family, no matter house parties or friends sleeping over - we have sofas and more for everyone. All our sofas come in a rich range of colours to suit the interior decor of your <a href="#" target="_blank">living room</a>. Our modular range has been cleverly designed to let you rearrange and create extra seating space only when you need it, so be sure to check them out. Many of our sofas come with functional under seat storage spaces letting you stow away the <a title="kid's toys " href="#" target="_blank">kid's toys </a>when play time’s over. Depending on which sofa you choose, they come in either fabric or leather depending on what you fancy. The <a title="footstools and pouffes" href="#" target="_blank">footstools and pouffes</a> are perfect to get a leg up and stretch out. Our plush chaise longues are uber comfortable for two and we have some very trendy armchairs to liven up your study.</p>
					<h2>
						<strong>Comfy Seating For Stylish Homes</strong>
					</h2>
					<p><br>No matter how big or small your family, no matter house parties or friends sleeping over - we have sofas and more for everyone. All our sofas come in a rich range of colours to suit the interior decor of your <a href="#" target="_blank">living room</a>. Our modular range has been cleverly designed to let you rearrange and create extra seating space only when you need it, so be sure to check them out. Many of our sofas come with functional under seat storage spaces letting you stow away the <a title="kid's toys " href="#" target="_blank">kid's toys </a>when play time’s over. Depending on which sofa you choose, they come in either fabric or leather depending on what you fancy. The <a title="footstools and pouffes" href="#" target="_blank">footstools and pouffes</a> are perfect to get a leg up and stretch out. Our plush chaise longues are uber comfortable for two and we have some very trendy armchairs to liven up your study.</p>
				
				
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name:"cat-description",
	props: {

	  main_category: {
		  type: Array | Object,
		  default: () => []
	  },

	}
}
</script>

<style scoped>
	.category-product-description {
		padding-top: 2rem;
	}	
</style>