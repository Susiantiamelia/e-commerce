<template>
    <div class="milks">
        <Navbar></Navbar>
        <Milks></Milks>
        
    </div>
</template>

<script>
import Milks from '@/components/Milks.vue'
import Modal from '@/components/details.vue'
import Navbar from '@/components/navbar.vue'
export default {
    components: {
        Milks,Modal, Navbar
    }
}
</script>

<style scoped>
.milks{
    background-color: #efefef;
    height: 100vh
}
</style>


