<template>
    <div class="login-page">
        <Navbar></Navbar>
        <Login></Login>
    </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Login from '@/components/Login'
export default {
    components: {
        Login,
        Navbar
    }
}
</script>

<style scoped>
.login-page{
    background-color: #efefef;
    height: 100vh
}
</style>
