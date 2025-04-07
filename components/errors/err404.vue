<template>
    <div>
        <div class="error-status_wrap">
            <div class="container">
                <div class="error-status_content">
                    <article class="hnf-page-container__main http-status-message__container">
                        <video class="http-status-message__ufo" autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" __idm_id__="964563969">
                            <source src="https://admin.masterleatherbd.com/public/nuxt/assets/images/error-video.mp4" type="video/mp4">
                        </video>
                        <h1 class="http-status-message__heading">Oops! Something went wrong :(</h1>
                        <div>
                            <p>The page you are looking for can't be found.</p><p>Maybe the links below can be helpful.</p>
                        </div>
                        <div><nuxt-link to="/" class="hnf-link">Go back to homepage</nuxt-link></div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"error-404"
}
</script>

<style scoped>
    .http-status-message__container {
        text-align: center;
        width:100%;
        margin-top:2.5rem
    }
    .http-status-message__heading {
        font-size: 1.375rem;
        line-height: 1.36;
        letter-spacing: -.0075rem;
        margin: 2.5rem 0 1.25rem 0;
        color: #111;
        font-weight: 700;
    }
    .http-status-message__container p{
        color:#484848;
        font-size: .875rem;
        line-height: 1.7142;
    }
    p:not(:last-of-type) {
        margin-bottom: .75rem;
    }
    .hnf-link {
        text-decoration: underline;
        font-weight: 400;
        color: #484848;
        font-size: .875rem;
    }
    .hnf-link:hover{
        color:#000
    }
</style>
