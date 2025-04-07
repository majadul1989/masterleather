<template>
  <img :src="`${ baseUrl() +src }`" class="w-100" :loading="loading" :class="classList"/>
</template>

<script>
import {baseUrl} from "~/helpers/common";
// base64-encoded transparent GIF
const placeholder =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

export default {
  methods: {baseUrl},
  props: {
    // the props required to compute `srcset` should go here

    src: {
      type: String
    },

    loading: {
      type: String,

      default: 'lazy',
    },
    classList: {}
  },

  data() {
    return {
      supportsLoadingAttribute: false,
    };
  },

  computed: {
    srcImg() {
      // `return` a fallback image for browsers
      // that don't support `srcset` and `sizes`
    },

    srcset() {
      // responsive images can be handled in all sorts of
      // ways and I won't go into any further detail here
    },

    sources() {
      if (this.loading === 'lazy' && !this.supportsLoadingAttribute) {
        return {
          'data-src': this.src,
          'data-srcset': this.srcset,

          src: placeholder,
          srcset: `${placeholder} 1w`,
        };
      }

      return {
        srcset: this.srcset,
      };
    },
  },

  mounted() {
    this.supportsLoadingAttribute = 'loading' in HTMLImageElement.prototype;
  },
};
</script>
