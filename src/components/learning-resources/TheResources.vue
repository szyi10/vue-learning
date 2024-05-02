<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resoucres')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResoucres from "./StoredResoucres.vue"
import AddResource from "./AddResource.vue"

export default {
  components: {
    StoredResoucres,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resoucres",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "htttps://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://www.google.pl",
        },
      ],
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resoucres" ? null : "flat"
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat"
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      }
      this.storedResources.unshift(newResource)
      this.selectedTab = "stored-resoucres"
    },
    removeResource(id) {
      // this.storedResources = this.storedResources.filter((res) => res.id !== id)
      const resIndex = this.storedResources.findIndex((res) => res.id === id)
      this.storedResources.splice(resIndex, 1)
    },
  },
}
</script>

<style></style>
