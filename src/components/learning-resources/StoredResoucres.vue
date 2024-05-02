<script>
import ResourceItem from "./ResourceItem.vue"

export default {
  components: { ResourceItem },
  inject: ["resources"],
}
</script>

<template>
  <ul>
    <ResourceItem
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></ResourceItem>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
