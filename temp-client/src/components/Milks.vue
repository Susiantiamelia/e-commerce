<template>
    <div class="milky">
        <div class="container-fluid" style="padding-top: 10vh">
            <div class="row">
                <div class="col-2 col-sm-2 sol-lg-2 col-md-2 col-xl-2" style="margin-top: auto;margin-bottom: auto;background-color: transparent; width: 100%">
                    <ul>
                        <li style="list-style: none">
                            <a href="#" style="padding-right: 70px;display: flex; align-items: center; width: 100%">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/original-icon.svg" class="product-icon" width="12px">
                                <span class="original" style="text-align: left;width: 100%; margin-left: 5px"><i class="fas fa-caret-left" style="margin-right: 10px; margin-left: 8px"></i><b>COW MILK</b></span>
                            </a>
                        </li>
                        <li style="list-style: none; margin-top: 5px">
                            <a href="#" style="padding-right: 70px;display: flex; align-items: center; width: 100%">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/cocoa-icon.svg" class="product-icon" width="12px">
                                <span class="cocoa" style="text-align: left;width: 100%; margin-left: 5px"><i class="fas fa-caret-left" style="margin-right: 10px; margin-left: 8px"></i><b>VEGGIE MILK</b></span>
                            </a>
                        </li>
                        <li style="list-style: none;margin-top: 5px">
                            <a href="#" style="padding-right: 70px;display: flex; align-items: center; width: 100%">
                                <img src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/stencil/b45bc200-7d2d-0136-0c25-633ff0d6ced1/e/67f30db0-7d4b-0136-d284-4d81a5daa3e5/img/simple-icon.svg" class="product-icon" width="12px">
                                <span class="simple" style="text-align: left;width: 100%; margin-left: 5px"><i class="fas fa-caret-left" style="margin-right: 10px; margin-left: 8px"></i><b>GOAT MILK</b></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-9 col-sm-9 sol-lg-9 col-md-9 col-xl-9" style="border: 1px solid black; ">
                    <div class="container-fluid">
                        <div class="row">
                            
                            <div class="col-3 col-sm-3 sol-lg-3 col-md-3 col-xl-3" style="border: 1px solid black">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-title">Almond Milk</div>
                                        <div class="card-img">
                                            <img class="card-image" src="http://cdn8.bigcommerce.com/s-ayhps3hr1w/images/stencil/500x659/products/114/419/Fronks_Simple_04__73447.1484151189.png?c=2" alt="Simple" title="Simple" height="130vh">
                                        </div>
                                        <br>
                                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="openModal">View Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Modal from '@/components/details.vue'
import {mapActions} from 'vuex'
export default {
    components: {
        Modal
    },
    methods: {
        ...mapActions([
            'openModal'
        ])
    }
}
</script>

<style scoped>
@font-face {
    font-family: Lydian;
    src: url(../assets/fonts/Lydian_BT_Roman.ttf);
}
.milky{
    background-color: #efefef;
    height: 100vh
}

ul{
    padding-left: 0
}

a{
    text-decoration: none
}

.original{
    color: #387da3;
    font-size: 11px
}

.cocoa{
    color: #df4597;
    font-size: 11px
}

.simple{
    color: #555;
    font-size: 11px
}
</style>

