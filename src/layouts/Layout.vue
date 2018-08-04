<template lang="pug">
q-layout(view="hHh Lpr lff")
  q-layout-header
    q-toolbar.q-py-none(color="primary")
      q-btn(v-if="hasDrawer", flat, dense, round, @click="drawerOpened = !drawerOpened", aria-label="Menu")
        q-icon(name="menu")
      q-btn.self-stretch.text-bold.q-ml-xs(flat, no-caps, to="/")
        img.header-logo.q-mr-sm(src="statics/quasar-logo.png")
        span Quasar

      q-btn.header-squared.self-stretch.text-bold(no-caps, flat, label="Guide", to="/guide")
      q-btn.header-squared.self-stretch.text-bold(no-caps, flat, label="Components", to="/components")

      .col

      q-btn-dropdown.header-squared.self-stretch.text-bold(flat, no-caps, :label="`v${$q.version}`")
        q-list(link)
          q-item(
            v-for="version in ['16', '15', '14', '13']"
            :key="version"
            v-close-overlay
            @click.native="openURL(`https://v0-${version}.quasar-framework.org/`)"
          )
            q-item-main(:label="`v0.${version}`")

      q-btn-dropdown.header-squared.self-stretch.text-bold(flat, no-caps, label="Quick Links")
        q-list(link)
          q-item(v-close-overlay, @click.native="openURL('https://github.com/quasarframework/quasar-awesome')")
            q-item-side(color="yellow-9", icon="flare")
            q-item-main(label="Awesome Quasar")
          q-item(v-close-overlay, @click.native="openURL('https://medium.com/quasar-framework')")
            q-item-side(color="primary", icon="fab fa-medium")
            q-item-main(label="Quasar Blog")
          q-item(v-close-overlay, @click.native="openURL('https://github.com/quasarframework')")
            q-item-side(color="secondary", icon="work")
            q-item-main(label="Repositories")
          q-list-header Playground
          q-item(v-close-overlay, @click.native="openURL('https://jsfiddle.net/rstoenescu/waugrryy/')")
            q-item-side(color="primary", icon="fab fa-jsfiddle")
            q-item-main(label="jsFiddle")
          q-item(v-close-overlay, @click.native="openURL('https://codepen.io/rstoenescu/pen/KQRZJg')")
            q-item-side(color="brown-5", icon="fab fa-codepen")
            q-item-main(label="Codepen")
          q-list-header Social
          q-item(v-close-overlay, @click.native="openURL('https://forum.quasar-framework.org/category/1/announcements')")
            q-item-side(color="purple", icon="announcement")
            q-item-main(label="Announcements")
          q-item(v-close-overlay, @click.native="openURL('https://github.com/quasarframework/quasar')")
            q-item-side(color="black", icon="fab fa-github")
            q-item-main(label="Github")
          q-item(v-close-overlay, @click.native="openURL('https://twitter.com/quasarframework')")
            q-item-side(color="blue", icon="fab fa-twitter")
            q-item-main(label="Twitter")

      q-btn-dropdown.header-squared.self-stretch.text-bold(flat, no-caps, label="Support")
        q-list(link)
          q-item(v-close-overlay, @click.native="openURL('https://discord.gg/5TDhbDg')")
            q-item-side(color="primary", icon="fab fa-discord")
            q-item-main(label="Chat")
          q-item(v-close-overlay, @click.native="openURL('https://forum.quasar-framework.org/')")
            q-item-side(color="secondary", icon="fas fa-comments")
            q-item-main(label="Forum")
          q-item(v-close-overlay, @click.native="openURL('https://stackoverflow.com/search?q=quasarframework')")
            q-item-side(color="red", icon="fab fa-stack-overflow")
            q-item-main(label="Stack Overflow")
          q-item-separator
          q-item(v-close-overlay, @click.native="openURL('https://www.patreon.com/quasarframework')")
            q-item-side(color="red", icon="fab fa-patreon")
            q-item-main(label="Patreon")

  q-layout-drawer(v-if="hasDrawer", v-model="drawerOpened")
    q-list(no-border, link, inset-delimiter)
      q-list-header Essential Links
      q-item(to="/", exact)
        q-item-main(label="Landing")
      q-item(to="/components/button", exact)
        q-item-main(label="Button")

  q-page-container
    transition(
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      :duration="200"
      @leave="resetScroll"
    )
      router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Layout',
  data () {
    return {
      drawerOpened: this.$q.platform.is.desktop
    }
  },
  computed: {
    hasDrawer () {
      return this.$route.path !== '/'
    }
  },
  methods: {
    openURL,
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    }
  }
}
</script>

<style lang="stylus">
.header-squared
  border-radius 0
.header-logo
  width 25px
  height 25px
</style>
