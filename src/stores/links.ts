import { defineStore } from 'pinia'

interface Link {
  key: string
  title: string
  url: string
}

export const useLinkStore = defineStore('link-store', {
  state: () => {
    return {
      links: [
        {
          key: 'lucas',
          title: 'LucasAlt',
          url: 'https://lucasalt.fr/',
        },
        {
          key: 'abc',
          title: 'Example.com',
          url: 'https://example.com/',
        },
      ] as Link[],
      fetching: false,
    }
  },

  getters: {
    results(state) {
      return state.links
    },

    isFetching(state) {
      return state.fetching
    },
  },

  actions: {
    async fetchNewLinks() {
      this.fetching = true
      const response = await fetch('/data/links.json')
      try {
        const result = await response.json()
        this.links = result.links
      } catch (err) {
        this.links = []
        console.error('Error loading todos:', err)
        return err
      }

      this.fetching = false
    },
  },
})
