<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
    <!-- {{error}} -->
  </div>
</template>

<script>
import error404 from '@/components/errors/err404'
import error500 from '@/components/errors/err500'

export default {
    name:'nuxt-error',
    layout:'default',
    props:{
        error:{
            type: Object,
            default: () => {}
        }
    },
    computed:{

        errorPage(){
            if (this.error.statusCode === 404) {
                return error404;
            }
            // catch everything else
            return error500;
        }
    }
}
</script>