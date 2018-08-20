<template>
    <div class="homepage">
        <Navbar></Navbar>
        <br><br><br><br><br><br>
        <div class="container" >
            <div class="d-flex align-items-center justify-content-center">
                <div class="content" >
                    <h1>ORGANIC NUT MILKS.<br>WE MAKE 'EM FRESH.<br>YOU DRINK 'EM FRESH.</h1>
                    <p>Happily delivering to doorsteps in Austin, San Antonio, Houston and Dallas. Made in Austin, TX</p>
                </div>
            </div>
        </div>
        <br><br><br><br><br><br>
        <div class="container-fluid">
            <div id="tempat-susu" class="d-flex flex-row align-items-end justify-content-around">
            <div class="p-1">
                 <article class="card ">
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#"   class="product-name" style="padding-bottom:0px; margin-bottom:0px">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/original-icon.svg" class="product-icon" width="25px"><br><br>
                                <span class="original">THIS ONE'S Cow Milk</span>
                                <figure class="card-figure">
                                    <img class="card-image" src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/images/stencil/500x659/products/118/416/Fronks_Original_01__45224.1484091301.png?c=2" alt="Original" title="Original">
                                </figure>
                            </a>
                        </h4>
                    </div>
                </article>
            </div>
            <div class="p-1">
                 <article class="card ">
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#"   class="product-name" style="padding-bottom:0px; margin-bottom:0px">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/cocoa-icon.svg" class="product-icon" width="25px"><br><br>
                                <span class="cocoa">THIS ONE'S Veggie Milk</span>
                                <figure class="card-figure">
                                    <img class="card-image" src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/images/stencil/500x659/products/117/415/Fronks_Cocoa_01__28865.1484091275.png?c=2" alt="Cocoa" title="Cocoa">
                                </figure>
                            </a>
                        </h4>
                    </div>
                </article>
            </div>
            <div class="p-1">
                 <article class="card ">
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#"   class="product-name" style="padding-bottom:0px; margin-bottom:0px">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/simple-icon.svg" class="product-icon" width="25px"><br><br>
                                <span class="simple">THIS ONE'S Goat Milk</span>
                                <figure class="card-figure">
                                    <img class="card-image" src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/images/stencil/500x659/products/114/419/Fronks_Simple_04__73447.1484151189.png?c=2" alt="Simple" title="Simple">
                                </figure>
                            </a>
                        </h4>
                    </div>
                </article>
            </div>
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

a{
    text-decoration: none
}

#tempat-susu{
    
    width: 150vh
}

.original{
    color: #387da3
}

.cocoa{
    color: #df4597
}

.simple{
    color: #555
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
    height:100%;
    /*padding-left: 25px*/
}

.card-figure {
    padding: 0;
    margin: 0 0 0 !important;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
}

figure{
    height: 230px;
    width: auto;
    overflow: hidden;
}
figure:hover{
    height: 240px;
}

*, :after, :before {
    box-sizing: border-box;
}
</style>

