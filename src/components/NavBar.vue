<template>
  <div class="mb-4 pb-1 border-b border-solid border-gray-300">
    <router-link to="/" class="px-4 cursor-pointer"> Home </router-link>
    <router-link to="/settings/" class="px-4 cursor-pointer">
      Settings
    </router-link>
  </div>
</template>

<style>
.router-link-active {
  @apply underline;
}
</style>
