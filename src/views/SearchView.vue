<template v-if="query">
  <main>
    <div class="container has-text-centered">
    </div>
    <article class="panel is-link p-6">
<!--      <p class="panel-heading">-->
<!--        Search-->
<!--      </p>-->
      <p class="panel-tabs">
        <a>All</a>
        <a class="is-active">Categories</a>
        <a>Plaintext</a>
        <a>Commands</a>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-link" type="text" placeholder="Search" v-model="query.category">
          <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
        </p>
      </div>

      <ul>
          <SearchCategories
              :queryParams="query"
              @category-update="(category) => query.category = category" />
          <SearchUsers
              :queryParams="query"
              @users-update="(users) => query.users = users" />
          <SearchDate @date-update="({startDate, endDate}) => query = {...query, 'start-date' : startDate,'end-date': endDate}" />
      </ul>
      <SearchResult :queryParams="query" :tils="tils" ></SearchResult>
    </article>
  </main>
</template>

<script setup>
import SearchCategories from "@/components/SearchCategories.vue";
import SearchUsers from "@/components/SearchUsers.vue";
import SearchDate from "@/components/SearchDate.vue";
import SearchResult from "@/components/SearchResult.vue";
</script>

<script>
import oma from "../services/OmaService";

export default {
  data() {
    return {
      query: {category: "", users: [], "start-date": "", "end-date": ""},
      tils: []
    }
  },
  watch: {
    query: {
      handler (newQuery, oldQuery){
        if(newQuery.category !== ""){
          oma.getTils(newQuery)
              .then(response => {
                this.tils = response.data.result;
              }).catch(e => {
            console.log(e);
          });
        }
      },
      deep: true
    }
  }
}
</script>
<style>
ul li{
  display: inline;
  padding: 0px 4px 0px 4px;
  margin: 4px 4px 4px 4px;
  cursor: pointer;
  color: #2979ff;
  white-space: pre-wrap;
  word-wrap:break-word;

  /*Selected style*/
  border-radius: 7px;
  border-color: transparent;
  border-style: dashed;
}

ul{
  list-style-type: disc;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 1em 20em 1em 20em;
}

</style>
