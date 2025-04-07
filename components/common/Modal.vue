<template>
  <div v-if="active">
    <div ref="modal" class="modal fade"
         :class="{show, 'd-block': active}"
         tabindex="-1"
         role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">

          <div class="modal-header">
            <span v-if="modal_title" class="modal-title">{{ modal_title }}</span>
            <button type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="toggleModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

        </div>
      </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show"></div>
  </div>
</template>
<script>
export default {
  props: {
    modal_title: {
      type: String,
      default: ''
    },

    modalRequest: {}
  },
  data() {

    return {
      active: false,
      show: false,
      activeStamp: null
    }
  },
  methods: {

    toggleModal() {

      this.active = !this.active;
      this.activeStamp = this.active ? (new Date().getTime()) : 0


      const body = document.querySelector("body");
      this.$store.dispatch('variable/setModalOpen', this.active)
      this.active
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");

      setTimeout(() => (this.show = !this.show), 10);

    },

    closeModal() {
      const difSec = ((new Date()).getTime() - this.activeStamp)


      if (typeof document != "undefined" && this.$store.state.variable.MODAL_OPEN && difSec > 500) {

        const body = document.querySelector("body");
        this.active = false
        this.show = false
        body.classList.remove("modal-open")

      }

    }

  },

  watch: {
    modalRequest: {
      handler() {
        if (this.modalRequest) {
          this.toggleModal()
        }
      }
    }
  },

  async created() {
    this.$nuxt.$on("modal-request", this.toggleModal)
    this.$nuxt.$on("modal-close", this.closeModal)
  }
};
</script>
<style scoped>
.modal-header {
  padding: .5rem 1rem;
}
.modal-content {
  border-radius: 0 !important;
}
.modal-backdrop.show {
  opacity: 0.7;
}
.cart-img a img {
  width: 100px;
   border: 0px solid rgba(238,238,238,0.93333);
  border-radius: 10px;
}
.cart-prouct-title {
  color: #000000;
}

.modal-footer {
  padding: .75rem 0rem 0rem 0rem;
  border-top: 0px solid #dee2e6;
}

a.view_one {
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 0px;
}
</style>

