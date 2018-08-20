Vue.component('postitem', {
  template: `
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="card">
        <div class="input-group mb-5">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" accept=".jpg, .jpeg, .png .webp" v-on:change="getImage($event)">
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose File</label>
          </div>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="name" v-model="name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="price" placeholder="price" v-model="price">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="description" placeholder="description" v-model="desc">
        </div>
        <div class="form-group">
          <label for="sel1">Category:</label>
          <select class="form-control" id="sel1">
            <option>cow</option>
            <option>veggie</option>
            <option>goat</option>
          </select>
        </div>
        <button type="button" class="btn btn-outline-dark" @click="getData">Submit</button>
      </div>
    </div>
  </div>
  `,
  data(){
    return {
      image: '',
      name: '',
      price: '',
      desc: ''
    }
  },
  methods: {
    getImage(e){
      this.image = e.target.files[0]
    },
    getData(){
      let category = document.getElementById("sel1").value
      let input = {
        name: this.name,
        price: this.price,
        desc: this.desc,
        category: category,
        image: this.image
      }

      this.$emit('newitem', input)
    }
  }
})