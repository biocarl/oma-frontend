<template>
  <main>
    <SearchCategories :categories="categories" />
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
      categories: this.fetchCategories()
    }
  },
  methods: {
    fetchCategories(){
      oma.getAll()
          .then(response => {
            this.categories = response.data;
            console.log(response.data);
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

