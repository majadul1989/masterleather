<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">My Payment Options</h2>
            </div>
            <div class="no-payment-options">
                <span class="no-payment-options-icon">
                    <span class="lazada lazada-ic-ac-payment lazada-icon undefined"><i class="far fa-credit-card"></i></span>
                </span>
                <span class="no-payment-options-text">No payment options</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .no-payment-options {
        background: #ffffff;
        padding-top: 95px;
        padding-bottom: 179px;
        text-align: center;
    }
    .no-payment-options-icon {
        display: block;
    }
    .no-payment-options-icon .lazada-icon {
        font-size: 60px;
        color: #dadada;
    }
   
    .no-payment-options-text {
        font-size: 14px;
        color: #757575;
        letter-spacing: 0;
    }
</style>