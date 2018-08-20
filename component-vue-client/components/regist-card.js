Vue.component('registcard', {
  template: `
  <div class="card" id="regist">
    <div class="card-body">
      <h3 class="card-title">Registration</h3>
      <br><br>
      <form id="Login">
          <div class="form-group">
            <input type="email" class="form-control" v-model="fullname" placeholder="Full Name">
          </div>
          <div class="form-group">
              <input type="email" class="form-control" v-model="username" placeholder="Username">
            </div>
          <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="Email Address">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-secondary btn-block" @click="registData">Sign Up</button>
      </form>
    </div>
  </div>
  `,
  data(){
    return{
      fullname: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registData(){

      this.$emit('regist-click', {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password
    })
    }
  }
})