<script>
import {generateTagUniqueColor} from "./helpers.js";
import hljs from 'highlight.js';
export default {
  props: {
    queryParams: {
      type: Object,
      required: true
    },
    tils: {
      type: Array,
      required: true
    }
  },
  methods: {
    generateTagUniqueColor: generateTagUniqueColor,
    highlightCode(htmlString){
      let div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      // console.log(div.querySelectorAll("h1"));
      div.querySelectorAll("pre code").forEach(
          e => {
             hljs.highlightElement(e);
          }
      );
      return div.innerHTML;
    }
  }
}
</script>

<template>
  <div class="container has-text-start search-result">
<!--    <ul> <li v-for="(value, key) in queryParams">{{ key }}:<strong>{{ value }}</strong></li> </ul>-->
      <div id="results" class="m-4">
        <div v-for="(tilsUser) in tils">
          <div v-for="(til) in tilsUser.result" class="panel-block">
              <details >
                  <summary class="columns is-vcentered" >
                    <ul class="column is-2">
                      <div class="px-1">
                        <span>📅</span>
                        <strong class="px-2">{{ til.date }}</strong>
                        <br>
                      </div>
                      <div class="ml-0 pl-0 pt-3">
                        <div class="tags">
                          <span class="tag is-info is-rounded px-2 mx-2" :style="{'background-color': generateTagUniqueColor(tilsUser.user,0.8)}">
                            <i class="fas fa-user pr-2" aria-hidden="true"></i>
                            {{tilsUser.user }}
                          </span>
                          <span v-for="cat in til.category.split(',')" :style="{'background-color': generateTagUniqueColor(cat,0.8)}" class="tag is-link is-rounded px-2 mx-2">{{ cat }}</span>
                        </div>
                      </div>
                    </ul>
                    <h2 class="column">{{ til.title}}</h2>
                  </summary>
                <div class="til-content" v-html="highlightCode(til.content)"></div>
              </details >
          </div>
        </div>
      </div>
    <div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.0rem;
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
  line-height: 1.5;
  font-size: 1em;
}

/* Styling lists */
:deep(.til-content) ul {
  list-style-type: disc;
  list-style-position: inside;
  display: block;
}

:deep(.til-content) ul li {
  display: list-item;
  color: #0a0a0a;
  cursor: default;
}

:deep(.til-content) ul > li > ul{
  list-style-type: circle;
}

:deep(.til-content) ul > li > ul > li{
  color: #0a0a0a;
}

:deep(.til-content) ul > li > ul > li > ul{
  list-style-type: square;
}

:deep(.til-content) ul > li > ul > li > ul > li{
  color: #0a0a0a;
}

details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
details{
  width: 100%;
}
summary{
  border-bottom: 1px solid gray
}
</style>
