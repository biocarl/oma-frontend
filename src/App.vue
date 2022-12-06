<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section class="section">
      <div class="container has-text-centered">
          <img width="300" height="300" alt="Oma logo" src="@/assets/oma.png"/>
        <div style="font-weight: bold; font-size: 2em;margin-left: 2em;font-family: 'Latin Modern Roman', serif">
          <span>O</span>
          <span style="font-size: 0.5em; color: #c5cae9">pen</span>
          <span>M</span>
          <span style="font-size: 0.5em; color: #c5cae9">emory</span>
          <span>A</span>
           <span style="font-size: 0.5em; color: #c5cae9">rchive</span>
        </div>
<!--        <RouterLink to="/">Back Home</RouterLink>-->
<!--        <RouterLink to="/search-result">About</RouterLink>-->
      </div>
    </section>
  </header>
  <RouterView />
</template>
<style>
.section{
  padding-bottom: 1em !important;
}

</style>