export const state = () => ({
    posts: [],
})

// unused for now
export const actions = () => ({
    async getPosts(state) {
        state.posts = await this.$axios.$get("posts")
    }
})