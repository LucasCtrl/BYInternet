import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth-store', {
  state: () => {
    return {
      id: '' as string | null,
      key: '' as string | null,
    }
  },

  actions: {
    async fetchAuth() {
      const projectId: string | null =
        window.localStorage.getItem('detaProjectId')
      const projectKey: string | null =
        window.localStorage.getItem('detaProjectKey')

      if (projectId) this.updateProjectId(projectId)
      if (projectKey) this.updateProjectKey(projectKey)

      console.log(projectId, projectKey)
    },

    updateProjectId(id: string) {
      this.id = id
      window.localStorage.setItem('detaProjectId', id)
      console.log(id)
    },

    updateProjectKey(key: string) {
      this.key = key
      window.localStorage.setItem('detaProjectKey', key)
      console.log(key)
    },
  },
})
