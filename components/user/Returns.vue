<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">My Returns</h2>
            </div>
            <div class="order-no-data">
                <div class="order-no-data-text">There are no returns yet.</div>
                <div class="order-no-data-btn"><a href="#" class="order-no-data-btn-text">CONTINUE SHOPPING</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .order-no-data {
        height: 239px;
        width: 100%;
        padding-top: 80px;
        text-align: center;
    }
    .order-no-data-text {
        font-size: 14px;
        color: #757575;
        margin-bottom: 27px;
    }
    .order-no-data-btn {
        border: 1px solid #0058a3;
        border-radius: 2px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .5px;
        padding: 0 8px;
        height: 32px;
        line-height: 32px;
        display: inline-block;
    }
    .order-no-data-btn-text {
        color: #0058a3;
    }
</style>