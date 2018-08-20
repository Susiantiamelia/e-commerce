Vue.component('category', {
  template: `
  <ul>
     <li v-for="(logo,index) in logos">
      <button @click="cat(logo.id)">
          <img :src="logo.img" width="12px">
          <span :class="logo.class" style="text-align: left;width: 100%; margin-left: 5px"><i class="fas fa-caret-left" style="margin-right: 10px; margin-left: 8px"></i><b>{{ logo. span }}</b></span>
      </button>
    </li>
  </ul>
   
  `,
  props: ['logos'],
  methods: {
    cat(id){
      this.$emit('cat', id)
    }
  }
})