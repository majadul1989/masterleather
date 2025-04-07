<template>
    <div class="col-5 col-md-4 col-sm-6">
        <div class="rl-pd-post">
            <!-- <nuxt-link :to="'/blogs/'+post.seo_url">
                <div class="rl-pd-post-img">
                    <lazy-image :src="post.image_url" alt=""/>
                </div>
                <div class="rl-pd-post-text">
                    <h2>{{post.title}}</h2>
                    <i class="icon-right-big"></i>
                </div>
            </nuxt-link> -->

          <a v-bind:href="'/blogs/'+post.seo_url">
                <div class="rl-pd-post-img">
                    <lazy-image :src="post.image_url" alt=""/>
                </div>
                <div class="rl-pd-post-text">

                      <h2>{{post.title}}</h2>

                    <i class="icon-right-big"></i>
                </div>
			    </a>

        </div>
    </div>
</template>
<script>
export default {
    props: {
		post: {}
	}
}
</script>
<style scoped>
	.inview-news-event .rl-pd-post {
		margin-bottom: 30px;
	}
	.rl-pd-post-img {
		height: 205px;
		overflow: hidden;
	}
	.rl-pd-post-img img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.rl-pd-post-text {
		padding: 1.25rem 0 0;
	}
	.rl-pd-post-text h2 {
		color: #111;
		font-size: 1rem;
		line-height: 1.5;
		font-weight: 700;
	}
	.rl-pd-post-text a i {
		font-size: 18px;
		color: #000;
		padding-top: 10px;
	}
	.rl-pd-post:hover h2 {
		text-decoration: underline;
	}

</style>
