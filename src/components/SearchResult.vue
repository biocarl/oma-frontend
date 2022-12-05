<script setup>
defineProps({
  queryParams: {
    type: Object,
    required: true
  },
  tils: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container has-text-start search-result">
<!--    <ul> <li v-for="(value, key) in queryParams">{{ key }}:<strong>{{ value }}</strong></li> </ul>-->
      <div id="results" class="m-4">
        <div v-for="(tilsUser) in tils">
          <div v-for="(til) in tilsUser.result" class="panel-block">
              <details >
                  <summary class="columns is-vcentered">
                    <ul class="column is-narrow">
                      <li class="px-1">
                        <span> <i class="fas fa-book" aria-hidden="true"></i> </span>
                        <strong class="px-3">{{ til.date }}</strong>
                      </li>
                      <li class="pl-4 pt-2">
                        <span class="tag is-link is-rounded px-2 mx-2">{{ til.category }}</span>
                        <br/>
                        <span class="tag is-info is-rounded px-2 mx-2">{{ tilsUser.user }}</span>
                      </li>
                    </ul>
                    <h2 class="column">{{ til.title}}</h2>
                  </summary>
                <div class="til-content p-3 ml-5" v-html="til.content"></div>
              </details >
          </div>
        </div>
      </div>


    <div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-weight: 500;
  font-size: 2.0rem;
  top: -10px;
  cursor: pointer;
}
h2:hover {
  color: #485fc7;
}

.search-result {
  /*background-color: #ffecb8;*/

}

.til-content{
  border-radius: 7px;
  /*border-color: transparent;*/
  border-style: dashed;
  border-color: red;
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
