<template>
    <div v-if="preLoadModal">
    <div ref="modal" class="modal fade" :class="[preLoadModal?'d-block':'',preLoadModalShow?'show':'']">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content text-center" style="background:none;border:none;display:inline-block;" >

                    <div class="modal-body" style="display:inline-block;">

                        <div class="modal-header" style="background:none;border:none;">
                            <button type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    @click="toggleModal"
                                    >
                                <span aria-hidden="true" style="color:black;background:black;padding:0 10px 5px 10px; border-radius:2px;">&times;</span>
                            </button>
                        </div>


                        <div class="container-fluid" style="width:100%; display:inline-block;" v-if="$store.state.common.PRE_LOAD_ADS.widget" v-html="$store.state.common.PRE_LOAD_ADS.widget.description"></div>
                    </div>

                </div>
            </div>
            </div>
            <div v-if="preLoadModal" class="modal-backdrop fade show"></div>
    </div>

</template>

<script>
export default {
    data(){
        return {

			preLoadModal: false,
			preLoadModalShow: false,

        }
    },

    methods: {
        
		toggleModal() {
		const body = document.querySelector("body");
		this.preLoadModal = !this.preLoadModal;
        this.$store.dispatch('variable/setModalOpen',this.preLoadModal)
		this.preLoadModal
			? body.classList.add("modal-open")
			: body.classList.remove("modal-open");
		setTimeout(() => (this.preLoadModalShow = !this.preLoadModalShow), 10);

		},

        closeModal(){
            if(typeof document != "undefined" && this.preLoadModal == true){
             const body = document.querySelector("body");
                this.preLoadModal = false
                this.preLoadModalShow = false
                body.classList.remove("modal-open")
            }
        }
    },

    async created(){

		await this.$store.dispatch('common/fetchPreLoadAds',{
			id: 5,
            ...this.$route.query
		})

		if(this.$store.state.common.PRE_LOAD_ADS.widget && this.$store.state.common.PRE_LOAD_ADS.widget.is_active == 1){
			this.toggleModal()
		}

        this.$nuxt.$on("modal-request",this.toggleModal)
        this.$nuxt.$on("modal-close",this.closeModal)

    }
}
</script>