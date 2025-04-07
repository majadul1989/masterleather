<template>
    <div :class="accordion_container">
        <div class="accordion-header" @click="toggleAccordion">
            <div class="accordion-item-header__title-wrapper">
                <slot name="header"></slot>
            </div>
            <div class="accordion-item-header__icon">
                <i :class="[show?'icon-up-open':'icon-down-open']"></i>
            </div>
        </div>
        <div class="accordion-content" :class="[(collapsing?'collapsing':'collapse'),(show?'show':'')]" :style="[collapsing?{height: '20px'}:'']">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accordion_container: {
            type: String,
            default: 'accordion-container'
        },

        accordionRequest: {
            default: null
        }
    },
    data(){
       
       return {
            collapsing: false,
            show: false,
       }
    },

    methods: {
        toggleAccordion(){
            const self = this
            self.collapsing = true

            setTimeout(function(){
                self.show = !self.show
                self.collapsing = false
            },30)
        },
        
    },

    watch: {
        accordionRequest: {
            handler(){
                this.toggleAccordion()
            }
        }
    },

    mounted(){
        
    }
}
</script>

<style scoped>
    .accordion-header{
        display: flex;
    }
</style>