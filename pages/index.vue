<template>
  <section class="section">
    <div class="hero is-primary is-flex-center py-5 is-bold box">
      <nuxt-link :to="{ name: 'login' }">
        <button class="button is-large">Login</button>
      </nuxt-link>
    </div>
   
    <div class="content">
      <h1>Posts</h1>
    </div>

    <div v-if="$fetchState.pending" class="has-text-centered is-size-3">
      Loading...
    </div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="card my-2">
        <div class="card-header">
          <p class="card-header-title">{{ post.title }}</p>
        </div>
        <div class="card-content">
          {{ post.body }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card"

export default {
  name: "HomePage",

  components: {
    Card,
  },

  data() {
    return {
      posts: [],
    }
  },

  async fetch() {
    try {
      this.posts = await this.$axios.$get("posts")
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>