<script setup lang="ts">
import DemoComponent from './DemoComponent.vue'
</script>

<template>
  <div class="home-main">
    <div class="hero">
      <DemoComponent />
      <footer>
        <i>&copy;{{ new Date().getFullYear() }} dbetka</i>
      </footer>
    </div>
  </div>
</template>
