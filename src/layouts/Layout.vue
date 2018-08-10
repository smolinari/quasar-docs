<template lang="pug">
q-layout(view="hHh LpR lff")
  q-layout-header
    q-toolbar.q-py-none(color="primary")
      q-btn(v-show="hasDrawer", flat, dense, round, @click="leftDrawerState = !leftDrawerState", aria-label="Menu")
        q-icon(name="menu")
      q-btn.self-stretch.text-bold.q-ml-xs(flat, no-caps, to="/")
        img.header-logo.q-mr-sm(src="statics/quasar-logo.png")
        span Quasar
      q-btn.self-stretch.text-bold.q-ml-xs(flat, no-caps, to="/components/button", label="Documentation")

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
          q-item(v-close-overlay, @click.native="openURL('https://codepen.io/rstoenescu/pen/KQRZJg')")
            q-item-side(color="brown-5", icon="fab fa-codepen")
            q-item-main(label="Codepen")
          q-item(v-close-overlay, @click.native="openURL('https://jsfiddle.net/rstoenescu/waugrryy/')")
            q-item-side(color="primary", icon="fab fa-jsfiddle")
            q-item-main(label="jsFiddle")
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

      q-btn.q-ml-xs(v-show="hasDrawer", flat, dense, round, @click="rightDrawerState = !rightDrawerState", aria-label="Menu")
        q-icon(name="menu")

  q-layout-drawer(
    v-if="hasDrawer"
    v-model="leftDrawerState"
    content-class="shadow-0"
  )
    .flex.justify-center
      .bg-grey-4.flex.flex-center.text-white.q-mt-md(
        style="width: 250px; height: 200px"
      ) Sponsors

      q-btn.q-mt-lg(
        type="a"
        href="https://www.patreon.com/quasarframework"
        target="_blank"
        size="13px"
        color="red"
        icon="fab fa-patreon"
        label="Become a Patron"
      )

      q-search.q-my-lg(v-model="search", inverted-light, color="white")

    q-item-separator
    q-list-header For Design - Working
    q-item(to="/", exact)
      q-item-main(label="Landing Page")
    q-item(to="/components/button", exact)
      q-item-main(label="Component Page")
    q-item(to="/components/other", exact)
      q-item-main(label="Some Other Page")

    q-item-separator
    q-list-header.q-mt-md Actual Menu - Not Working
    app-menu

  q-layout-drawer(
    v-if="hasDrawer"
    v-model="rightDrawerState",
    side="right"
    :width="180"
    content-class="shadow-0"
  )
    q-list(no-border, link)
      q-list-header Table of Contents
      q-item(@click.native="scrollTo('introduction')")
        q-item-main(label="Introduction")
      q-item(@click.native="scrollTo('installation')")
        q-item-main(label="Installation")
      q-item(@click.native="scrollTo('usage')")
        q-item-main(label="Usage")
      q-item(@click.native="scrollTo('api')")
        q-item-main(label="API")
    .flex.justify-center.q-mt-sm
      .bg-grey.flex.flex-center.text-white(
        style="width: 160px; height: 243px"
      ) Ad

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
import { openURL, scroll } from 'quasar'
import AppMenu from 'components/AppMenu.js'

export default {
  name: 'Layout',
  components: {
    AppMenu
  },
  watch: {
    $route () {
      this.leftDrawerState = true
      this.rightDrawerState = true
    }
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    hasDrawer () {
      return this.$store.getters.hasDrawer
    },
    leftDrawerState: {
      get () {
        return this.$store.state.leftDrawerState
      },
      set (val) {
        this.$store.commit('updateLeftDrawerState', val)
      }
    },
    rightDrawerState: {
      get () {
        return this.$store.state.rightDrawerState
      },
      set (val) {
        this.$store.commit('updateRightDrawerState', val)
      }
    }
  },
  methods: {
    openURL,
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    },
    scrollTo (id) {
      const el = document.getElementById(id)
      if (el) {
        const
          target = scroll.getScrollTarget(el),
          offset = el.offsetTop - el.scrollHeight

        scroll.setScrollPosition(target, offset, 500)
      }
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
