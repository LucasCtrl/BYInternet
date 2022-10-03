<template>
  <div class="container mx-auto px-4 sm:px-0 sm:max-w-xl">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from './stores/auth'

export default {
  created() {
    let store = useAuthStore()
    store.fetchAuth()
  },
}
</script>

<style>
body {
  @apply bg-slate-50;
}
</style>
