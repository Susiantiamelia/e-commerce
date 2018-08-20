Vue.component('logincard', {
  template: `
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Sign In</h3>
      <br><br>
      <form id="Login">
          <div class="form-group">
            <input type="email" class="form-control" v-model="uname_email" placeholder="Email or Username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-secondary btn-block" @click="loginData" >Login</button>
      </form>
    </div>
  </div>
  `,
  data() {
    return {
      uname_email: '',
      password: ''
    }
    
  },
  methods: {
    loginData(){
      event.preventDefault()

      this.$emit('login-click', {
          uname_email: this.uname_email,
          password: this.password
      })
    }
  }
})