<template>
    <!-- recent products wrapper -->
	<section  class="recent-product-wrapper clear-cache">
		<div class="container">
			<div class="section-grap4">
				<div class="row">
					<recent-product-home-item/>
					<recent-product-home-item/>
					<recent-product-home-item/>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import RecentProductHomeItem from './RecentProductHomeItem.vue'
export default {
  components: { RecentProductHomeItem },
    name:"home-RecentProduct"
}
</script>