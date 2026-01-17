import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nh2e63c8',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
