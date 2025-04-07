<template>
    <a href="#">
    <div class="singel-pd-banr-wrap section-grap2">
        <div class="singel-pd-banr_left">
            <lazy-image src="/public/nuxt/assets/images/single-pd-bnr.webp" class="w-100" alt=""/>
        </div>
        <div class="singel-pd-banr_right">
            <p>Not quite perfect? Design your own!</p>
            <h3>
                Open planner
            </h3>
            <div class="single-pd-banr_right_btn">
                <i class="icon-right-big"></i>
            </div>
        </div>
    </div>
    </a>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/*single product banner wrap */
    .singel-pd-banr-wrap {
    display: flex;
    }
    .singel-pd-banr-wrap .singel-pd-banr_left {
    width: 50%;
    }
    .singel-pd-banr-wrap .singel-pd-banr_right {
    width: 50%;
    background: #283e80;
    padding-top: 2.5rem;
    padding: 1.875rem;
    padding-right: 3.75rem;
    }
    .singel-pd-banr_right p {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #fff;
    padding-bottom: 10px;
    }
    .singel-pd-banr_right h3 {
    color: #fff;
    font-size: 1.375rem;
    line-height: 1.45455;
    font-weight: bold;
    }
    .single-pd-banr_right_btn {
    bottom: 3%;
    }
    .singel-pd-banr-wrap:hover .singel-pd-banr_right h3,
    .singel-pd-banr-wrap:hover .singel-pd-banr_right p {
    text-decoration: underline;
    }
</style>