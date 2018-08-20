Vue.component('cart', {
  template: `
    <div>
      <div class="container" v-if="empty" id="empty" style="margin-top: 50px">
        <h3>Sorry your cart is Empty</h3>
        <button type="button" class="btn btn-outline-dark" @click="shopping">Go Shopping!</button>
      </div>
      <div class="container" style="margin-left: 300px; margin-top: 90px">
        <div class="col">
          <div class="container" v-for="(cart,key) in carts">
            <div class="row align-items-center">
              <img :src="cart.image" :alt="cart.name" height="170px">
              <div class="card" style="margin-left: 100px">
                <h3>{{ cart.name }}</h3>
                <p>Rp {{ cart.price }}</p>
                <p>{{cart.desc}}</p>
                <div class="container">
                  <div class="row align-items-center">
                    <button class="btn btn-flat" style="margin-right: 20px" @click="minus(key)"><i class="far fa-minus-square"></i></button>
                    <p>{{cart.quantity}}</p>
                    <button class="btn btn-flat" style="margin-left: 20px" @click="plus(key)"><i class="far fa-plus-square"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button v-if="!empty" class="btn btn-outline-dark" style="margin-left: 250vh;" @click="Checkout">Checkout</button>

    </div>
  `, 
  props: ['carts'],
  methods: {
    shopping(){
      this.$emit('shopping', 'shopping')
    },
    minus(key){
      this.$emit('minus', key)
    },
    plus(key){
      this.$emit('plus', key)
    },
    Checkout(){
      this.$emit('checkout', 'checkout')
    }
  }
})