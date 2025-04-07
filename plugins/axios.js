export default function ({ $axios,store, redirect }) {
    $axios.setHeader('SELF-TOKEN',store.state.user.SELF_TOKEN)

    $axios.onRequestError((err) => {
        store.dispatch('variable/loading',true)
        console.log('request error')
    })
}