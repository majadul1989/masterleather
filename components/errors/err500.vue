<template>
    <div>
        <div class="error-status_wrap">
            <div class="container">
                <div class="error-status_content">
                    <!-- <h1 class="error-title">500</h1> -->
                    <!-- <div class="gears">
                         <div class="gear one">
                            <i class="icon-cog"></i>
                        </div>
                        <div class="gear two">
                            <i class="icon-cog"></i>
                        </div>
                        <div class="gear three">
                            <i class="icon-cog"></i>
                        </div>
                    </div> -->
                    <h2>{{error?(error.message?error.message:''):'Unexpected error'}} <b>:(</b></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../common/Loading.vue'
export default {
  components: { Loading },
    name:"error-500",
    props: {
        error:{}
    }
}
</script>

<style scoped>
    .error-status_content{
        text-align: center;
        margin-top: 50px;
    }
    .error-status_content h1.error-title{
        font-size:5rem;
        color: #000;
        margin: 10px 0; 
    }
    .error-status_content h2{
        margin: 20px auto 0 auto;
        font-size: 1.5rem;
        color: #000;
        font-weight: 200;
        
    }
    .error-status_content .gears{
        position: relative;
        width: 300px;
        margin: auto;
        height: 200px;

    }
    .error-status_content .gear  {
        font-size:80px;
        color: #000;
        line-height: 0;
        animation: roll 1.3s infinite;
        transform: rotate(30deg);
        position:absolute;
    }
    .error-status_content .gear.one{
        right: 90px;
        font-size: 120px;
        bottom: 35px;
    }
    .error-status_content .gear.two{
        right: 50px;
        animation: roll 1.5s infinite;
    }
    .gear.three {
        bottom: 2px;
        right: 40px;
        animation: roll 1.7s infinite;
    }
    @keyframes roll{
        0%{
            transform: rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }
   

</style>