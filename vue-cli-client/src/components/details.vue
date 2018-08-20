<template>

</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        dialogs: {
            get() {
                return this.$store.state.dialogs
            },
            set(value){
                this.$store.commit('setDialog', value)
            }
        }
    },
    methods:{
        ...mapActions([
            'openModal'
        ])
    }
}
</script>

<style scoped>

</style>

