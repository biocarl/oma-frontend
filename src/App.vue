<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title ">OMA</h1>
        <p class="subtitle">
          <strong>O</strong>pen <strong>M</strong>emory <strong>A</strong>rchive
        </p>
        <img alt="Oma logo" class="image is-128x128 is-inline-block" src="@/assets/oma.png"/>
        <br>
        <RouterLink to="/">Back Home</RouterLink>
        <RouterLink to="/search-result">About</RouterLink>
      </div>
    </section>
  </header>
  <RouterView />
</template>