<template>
    <div class="breadcrumb-wrapper clear-cache">
		<div class="container">
			<nav role="navigation" class="bc-breadcrumb__nav">
		        <ol class="bc-breadcrumb__list">
		            <li v-if="pathList.length > 0" class="bc-breadcrumb__list-item">
		                <nuxt-link to="/" class="bc-breadcrumb__link bc-link bc-link--black"><span>Home</span></nuxt-link>
		            </li>
		            <li v-for="(path,key) in pathList" :key="key" class="bc-breadcrumb__list-item">
		                <nuxt-link :to="path.link" class="bc-breadcrumb__link bc-link bc-link--black" ><span>{{path.label}}</span></nuxt-link>
		            </li>
		        </ol>
		    </nav>
		</div>
	</div>
</template>

<script>
export default {
    props: {
		pathList: {
			type: Array|Object,
			default(){
				return []
			}
		}
	}
}
</script>

<style scoped>

</style>