<template>
  <div class="home-main">
    <div class="hero">
      <Demo />
      <footer>
        <i>&copy;{{ new Date().getFullYear() }} dbetka</i>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Demo,
  },
})
</script>
