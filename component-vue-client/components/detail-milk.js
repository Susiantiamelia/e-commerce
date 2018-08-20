Vue.component('detailmilk', {
  template: `
  <div class="container">
    <div class="row">
      <div class="d-flex flex-row justify-content-center">
        <div class="card" style="width: 30rem">
          <div class="card-body">
            <img :src="milk.image" width="120vh">
          </div>
        </div>
        <div class="card" style="width: 40rem">
          <br>
          <h3>{{ milk.name }}</h3>
          <br>
          <p>Rp {{ milk.price }}</p>
          <br>
          <p>{{ milk.desc }}</p>
          <br>
          <button type="button" class="btn btn-outline-dark" @click="toCard(milk)">Add to Card<br><i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
    </div>
  </div>
  `,
  props: ['milk'],
  methods: {
    toCard(milk){
      this.$emit('buymilk', milk)
    }
  }
})