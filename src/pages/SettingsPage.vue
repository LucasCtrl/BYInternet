<script setup lang="ts">
import HeaderSection from '../components/HeaderSection.vue'
</script>

<template>
  <HeaderSection />
  <form className="flex flex-row my-2">
    <input
      type="text"
      placeholder="Deta token"
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
