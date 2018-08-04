<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
        class="q-py-none"
      >
        <q-btn
          v-if="hasDrawer"
          flat
          dense
          round
          @click="drawerOpened = !drawerOpened"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-btn flat no-caps to="/" class="self-stretch text-bold q-ml-xs">
          <img src="statics/quasar-logo.png" class="header-logo q-mr-sm" />
          <span>Quasar</span>
        </q-btn>

        <q-btn no-caps flat label="Guide" class="header-squared self-stretch text-bold" to="/guide" />
        <q-btn no-caps flat label="Components" class="header-squared self-stretch text-bold" to="/components" />

        <div class="col" />

        <q-btn-dropdown flat no-caps :label="`v${$q.version}`" class="header-squared self-stretch text-bold">
          <q-list link>
            <q-item
              v-for="version in ['16', '15', '14', '13']"
              :key="version"
              v-close-overlay
              @click.native="openURL(`https://v0-${version}.quasar-framework.org/`)"
            >
              <q-item-main :label="`v0.${version}`" />
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown flat no-caps label="Quick Links" class="header-squared self-stretch text-bold">
          <q-list link>
            <q-item v-close-overlay @click.native="openURL('https://github.com/quasarframework/quasar-awesome')">
              <q-item-side color="yellow-9" icon="flare" />
              <q-item-main label="Awesome Quasar" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://medium.com/quasar-framework')">
              <q-item-side color="primary" icon="fab fa-medium" />
              <q-item-main label="Quasar Blog" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://github.com/quasarframework')">
              <q-item-side color="secondary" icon="work" />
              <q-item-main label="Repositories" />
            </q-item>
            <q-list-header>Playground</q-list-header>
            <q-item v-close-overlay @click.native="openURL('https://jsfiddle.net/rstoenescu/waugrryy/')">
              <q-item-side color="primary" icon="fab fa-jsfiddle" />
              <q-item-main label="jsFiddle" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://codepen.io/rstoenescu/pen/KQRZJg')">
              <q-item-side color="brown-5" icon="fab fa-codepen" />
              <q-item-main label="Codepen" />
            </q-item>

            <q-list-header>Social</q-list-header>
            <q-item v-close-overlay @click.native="openURL('https://forum.quasar-framework.org/category/1/announcements')">
              <q-item-side color="purple" icon="announcement" />
              <q-item-main label="Announcements" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://github.com/quasarframework/quasar')">
              <q-item-side color="black" icon="fab fa-github" />
              <q-item-main label="Github" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://twitter.com/quasarframework')">
              <q-item-side color="blue" icon="fab fa-twitter" />
              <q-item-main label="Twitter" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown flat no-caps label="Support" class="header-squared self-stretch text-bold">
          <q-list link>
            <q-item v-close-overlay @click.native="openURL('https://discord.gg/5TDhbDg')">
              <q-item-side color="primary" icon="fab fa-discord" />
              <q-item-main label="Chat" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://forum.quasar-framework.org/')">
              <q-item-side color="secondary" icon="fas fa-comments" />
              <q-item-main label="Forum" />
            </q-item>
            <q-item v-close-overlay @click.native="openURL('https://stackoverflow.com/search?q=quasarframework')">
              <q-item-side color="red" icon="fab fa-stack-overflow" />
              <q-item-main label="Stack Overflow" />
            </q-item>
            <q-item-separator />
            <q-item v-close-overlay @click.native="openURL('https://www.patreon.com/quasarframework')">
              <q-item-side color="red" icon="fab fa-patreon" />
              <q-item-main label="Patreon" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-if="hasDrawer"
      v-model="drawerOpened"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item to="/" exact>
          <q-item-main label="Landing" />
        </q-item>
        <q-item to="/components/button" exact>
          <q-item-main label="Button" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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
    openURL
  }
}
</script>

<style lang="stylus">
.header-squared
  border-radius 0
.header-logo
  width 30px
  height 30px
</style>
