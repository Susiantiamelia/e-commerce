Vue.component('homemilk',{
  template: `
  <div class="d-flex flex-row justify-content-around">
    <div class="p-1" v-for="(milk,key) in milks">
      <article class="card ">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#" class="product-name" style="padding-bottom:0px; margin-bottom:0px">
              <img :src="milk.logo" class="product-icon" width="25px"><br><br>
                <span :class="milk.class">{{ milk.name }}</span>
                <figure class="card-figure">
                  <img class="card-image" :src="milk.img" :alt="milk.alt" title="milk.title">
                </figure>
            </a>
          </h4>
        </div>
      </article>
    </div>
  </div>
  `,
  props: ['milks']
})