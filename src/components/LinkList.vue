<script setup lang="ts">
import { useLinkStore } from '../stores/links'
</script>

<template>
  <div v-for="link in links" :key="link.key" class="flex flex-col">
    <a
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="my-2 px-6 py-2 border border-solid border-gray-300 hover:border-gray-400 rounded"
      >{{ link.title }}</a
    >
  </div>
</template>

<script lang="ts">
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useLinkStore, ['links']),
  },
}
</script>
