<template>
  <form
    className="flex flex-col my-2 pb-4 border-b border-solid border-gray-300"
  >
    <input
      type="text"
      placeholder="Example.com"
      className="px-6 py-2 w-full border border-solid border-gray-300 focus:border-gray-400 rounded outline-none"
    />
    <div class="mt-4 flex flex-row">
      <input
        type="url"
        placeholder="https://example.com/"
        className="px-6 py-2 w-full border border-solid border-gray-300 focus:border-gray-400 rounded outline-none"
      />
      <button
        type="submit"
        className="ml-4 p-2 text-white bg-blue-600 rounded focus:outline-none hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  </form>
</template>
