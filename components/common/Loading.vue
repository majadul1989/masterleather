<template>
    <div>
        <div v-if="loading" class="text-center">
            <div class="loading-item">
                <div class="loading-dots-list">
                    <div class="loading-dot"></div>
                </div>
              Loading ..
              
            </div>
        </div> 
        <div v-if="!loading && empty" class="text-center">
            {{notFoundTxt}}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        loading: {
            default: false,
        },
        empty:{
            default: false,
        },
        notFoundTxt: {
            default: 'Nothing Founds.'
        }
    }
}
</script>

<style>
    .loading-dots-list {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-left: -20px;
    }
    .loading-dot{
        position: relative;
        width: 10px;
        height: 10px;
        background-color: black;
        color: black;
        animation: loading-dot 0.5s infinite linear alternate;
        animation-delay: .5s;
       
    }

    .loading-dot::before, .loading-dot::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        background-color: black;
        color: black;
        animation: loading-dot 0.5s infinite alternate;
    }

    .loading-dot::before {
        left: -15px;
        animation-delay: 0s;
    }

    .loading-dot::after {
        left: 15px;
        animation-delay: 1s;
    }

    @keyframes loading-dot {
    0% {
        background-color: black;
    }
    50%,
    100% {
        background-color: #ebe6ff;
    }
    }
</style>