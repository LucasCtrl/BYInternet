<script setup lang="ts">
import HeaderSection from '../components/HeaderSection.vue'
</script>

<template>
  <HeaderSection />
  <!-- Project ID -->
  <form className="flex flex-row my-2" @submit="updateProjectId">
    <input
      v-model="projectId"
      type="text"
      placeholder="Project ID"
      className="px-6 py-2 w-full border border-solid border-gray-300 focus:border-gray-400 rounded outline-none"
    />
    <button
      type="submit"
      className="ml-4 p-2 text-white bg-blue-600 rounded focus:outline-none hover:bg-blue-700"
    >
      Save
    </button>
  </form>
  <!-- Project key -->
  <form className="flex flex-row my-2" @submit="updateProjectKey">
    <input
      v-model="projectKey"
      type="text"
      placeholder="Project key"
      className="px-6 py-2 w-full border border-solid border-gray-300 focus:border-gray-400 rounded outline-none"
    />
    <button
      type="submit"
      className="ml-4 p-2 text-white bg-blue-600 rounded focus:outline-none hover:bg-blue-700"
    >
      Save
    </button>
  </form>
</template>

<script lang="ts">
import { useAuthStore } from '../stores/auth'

export default {
  data() {
    return {
      projectId: '' as string | null,
      projectKey: '' as string | null,
    }
  },

  created() {
    let store = useAuthStore()
    this.projectId = store.id
    this.projectKey = store.key
  },

  methods: {
    updateProjectId(e: Event) {
      e.preventDefault()
      let store = useAuthStore()
      store.updateProjectId(this.projectId as string)
    },

    updateProjectKey(e: Event) {
      e.preventDefault()
      let store = useAuthStore()
      store.updateProjectKey(this.projectKey as string)
    },
  },
}
</script>
