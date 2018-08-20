Vue.component('Navbar', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="index.html">FRONKS</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="d-flex flex-row justify-content-end">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link" href="dashboard.html"><b>MILKS</b></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#"><b>YOUR ORDER</b></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="post-item.html" v-if="token == 'admin'"><b>ADD ITEM</b></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="login-regist.html" v-if="!token"><b>LOGIN</b></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="login-regist.html" v-if="!token"><b>SIGN UP</b></a>
              </li>
              <li class="nav-item">
                  <button class="nav-link" v-if="token" @click="logout"><b>LOGOUT</b></button>
              </li>
          </ul>
      </div>
    </div>
  </nav>
  `,
  props: ['token'],
  methods:{
      logout(){
          localStorage.removeItem('token')
      }
  }
})