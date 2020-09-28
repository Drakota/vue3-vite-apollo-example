<template>
  <span v-if="loading">Loading...</span>
  <ul v-if="result?.Page?.users">
    <li v-for="user in result.Page.users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feed from "./components/Feed.vue";
import { usePagesQuery } from "./gql";

export default defineComponent({
  name: "App",
  setup() {
    const { result, loading, error } = usePagesQuery();

    return { result, loading, error };
  },
});
</script>
