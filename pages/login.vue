<template>
  <section class="section">
    <div class="content">
      <span class="title">Rules </span>
      <div class="my-2">
        <p>There are some rules to follow in this community.</p>
        <ul class="list">
          <div class="list-item">
            Only past and present Koç University students are allowed on the
            platform.
          </div>
          <div class="list-item">Be nice.</div>
          <div class="list-item">Don't be mean.</div>
          <div class="list-item"></div>
          <div class="list-item"></div>
        </ul>
        <p>Please be nice.</p>
      </div>
    </div>

    <div class="is-flex-center my-2">
      <button class="button google-button is-outlined" @click="login">
        <google-logo class="mr-2"></google-logo>
        Sign in with Google
      </button>
    </div>
  </section>
</template>

<script>
import GoogleLogo from '@/components/GoogleLogo'


export default {
  name: 'Login',
  components: {
    GoogleLogo,
  },
  mounted() {},
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('google')
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.button.google-button {
  font-family: 'Roboto', sans-serif;
}
</style>