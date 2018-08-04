<template lang="pug">
#q-app
  transition(
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
    :duration="200"
    @leave="resetScroll"
  )
    router-view
  </div>
</template>

<script>
export default {
  name: 'App',
  meta: {
    titleTemplate: title => `${title} - Quasar`
  },
  methods: {
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  }
}
</script>

<style>
</style>
