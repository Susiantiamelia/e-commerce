<template>
    <div class="homepage">
        <Navbar></Navbar>
        <br><br><br><br><br><br>
        <div class="container">
            <div class="d-flex align-items-center justify-content-center">
                <div>
                    <h1>ORGANIC NUT MILKS.<br>WE MAKE 'EM FRESH.<br>YOU DRINK 'EM FRESH.</h1>
                    <p>Happily delivering to doorsteps in Austin, San Antonio, Houston and Dallas. Made in Austin, TX</p>
                </div>
            </div>
        </div>
        <br><br><br><br><br><br>
        <div class="d-flex flex-row justify-content-between align-items-end">
            <div class="p-1">
                 <article class="card ">
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#"   class="product-name" style="padding-bottom:0px; margin-bottom:0px">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/original-icon.svg" class="product-icon" width="25px"><br><br>
                                <span class="original">THIS ONE'S Original</span>
                                <figure class="card-figure" style="height: 220px; width: auto;overflow: hidden">
                                    <img class="card-image" src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/images/stencil/500x659/products/118/416/Fronks_Original_01__45224.1484091301.png?c=2" alt="Original" title="Original">
                                </figure>
                            </a>
                        </h4>
                    </div>
                </article>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
@font-face {
    font-family: Lydian;
    src: url(../assets/fonts/Lydian_BT_Roman.ttf);
}

.homepage {
    background-image: linear-gradient(#efefef 90%,#fff 15%);
    overflow: hidden;
    position: relative;
    height: 100vh
}

h1{
    font-family: Lydian;
    font-size: 34px
}

p{
    font-family: 'Karla', sans-serif !important;
    font-size: 12px
}

img{
    height: auto;
    max-width: 100%;
}

span{
    font-family: Lydian;
    font-size: 18px;
    text-transform: uppercase
}

.original{
    color: #387da3
}
.card-image{
    padding-bottom:  0px;
    border: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto;
    width: auto;
    margin-top: 20px;
}
.card-body{
    margin-bottom: 0px !important;
    padding: 0;
    bottom: 0px;
    position: fixed;
    z-index: 9999;
}

.card-title {
    font-size: 15px;
    margin: 0 0 0;
    height:100%
}

.card-figure {
    padding: 0;
    position: relative;
    margin: 0 0 0 !important;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
}

*, :after, :before {
    box-sizing: border-box;
}
</style>

