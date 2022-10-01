<script setup lang="ts">
import Navbar from '../components/NavBar.vue'
import LinkList from '../components/LinkList.vue'
</script>

<template>
  <Navbar />
  <div>Hello world</div>
  <LinkList />
</template>

<script lang="ts">
export default {
  components: {
    Navbar,
    LinkList,
  },
}
</script>

<style></style>
