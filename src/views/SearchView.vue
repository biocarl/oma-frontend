<template>
  <main>
    <div class="container has-text-centered">
    <h1>Search</h1>
    <h3>Current: <strong>{{currentCategory}}</strong></h3>
    </div>
    <SearchCategories :categories="categories" @category-update="(category) => this.currentCategory = category" />
  </main>
</template>

<script setup>
import SearchCategories from "@/components/SearchCategories.vue";
</script>

<script>
import oma from "../services/OmaService";

export default {
  data() {
    return {
      categories: this.fetchCategories(),
      currentCategory: "",
    }
  },
  methods: {
    fetchCategories(){
      oma.getAll()
          .then(response => {
            this.categories = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      return [
        {"category":"java","count":169},
        {"category":"uncategorized","count":68},
        {"category":"sql","count":42} ];
    }
  }
}
</script>
