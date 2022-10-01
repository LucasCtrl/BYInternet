<script setup lang="ts">
import { useLinkStore } from '../stores/links'
</script>

<template>
  <div v-for="link in links" :key="link.key">
    {{ link.title }}
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
