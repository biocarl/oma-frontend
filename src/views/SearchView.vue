<template>
  <main>
    <div class="container has-text-centered">
    <hr style="border-top: 1px dashed;">
    </div>
    <article class="panel is-link p-6">
      <p class="panel-heading">
        Search
      </p>

      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Categories</a>
        <a>Plaintext</a>
        <a>Commands</a>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-link" type="text" placeholder="Search">
          <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
        </p>
      </div>

      <ul>
        <li>
          <SearchCategories
              :queryParams="this.query"
              @category-update="(category) => this.query.category = category" />
        </li>
        <li>
          <SearchUsers
              :queryParams="this.query"
              @users-update="(users) => this.query.users = users" />
        </li>
        <li>
          <SearchDate @date-update="({startDate, endDate}) => this.query = {...this.query, 'start-date' : startDate,'end-date': endDate}" />
        </li>
      </ul>
      <SearchResult :queryParams="this.query" :tils="this.tils" ></SearchResult>
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
          console.log("Category: " + newQuery.category + "| Users: " + newQuery.users);
          oma.getTils(this.query)
              .then(response => {
                this.tils = response.data;
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
