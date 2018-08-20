Vue.component("milk", {
  template: `
  <div class="row">
    <div v-for="(milk,key) in milks" class="col-3 col-sm-3 sol-lg-3 col-md-3 col-xl-3" >
      <div class="card">
        <div class="card-body">
            <div class="card-title">{{ milk.name }}</div>
            <div class="card-img">
                <img class="card-image" style="padding-left: 30px" :src="milk.image" alt="Simple" title="Simple" height="130vh">
            </div>
            <br>
            <p id="milkprice">{{ milk.price }}</p>
            <br>
            <button v-if="token == 'admin'" type="button" class="btn btn-outline-dark btn-sm" @click="edit(milk._id)">Edit</button>
            <button v-if="token == 'admin'" id="delete" type="button" @click="deletemilk(milk._id)"><i class="fas fa-trash"></i></button>
            <button type="button" class="btn btn-outline-dark btn-sm" @click="detail(milk._id)">View Detail</button>
        </div>
      </div>
    </div>
  </div>
  
  `,
  props: ['milks', 'token'],
  methods: {
    detail(id) {
      this.$emit('detail', id)
    },
    edit(id) {
      this.$emit('edit', id)
    },
    deletemilk(id) {
      this.$emit('deletemilk', id)
    }
  }
})