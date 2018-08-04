<template>
  <q-card class="code-example q-my-xl">
    <q-toolbar text-color="grey-7" color="grey-2">
      <div class="q-subtitle">{{ title }}</div>
      <div class="col" />
      <q-btn dense flat round icon="fab fa-github" color="grey-7">
        <q-tooltip :offset="[0, 10]">View on Github</q-tooltip>
      </q-btn>
      <q-btn dense flat round icon="fab fa-codepen" class="q-ml-sm" color="grey-7">
        <q-tooltip :offset="[0, 10]">Edit in Codepen</q-tooltip>
      </q-btn>
      <q-btn dense flat round icon="code" class="q-ml-sm" @click="expanded = !expanded" color="grey-7">
        <q-tooltip :offset="[0, 10]">View Source</q-tooltip>
      </q-btn>
    </q-toolbar>

    <q-card-separator />

    <q-slide-transition>
      <div v-show="expanded">
        <q-tabs
          v-model="currentTab"
          inverted
          color="grey-7"
          no-pane-border
        >
          <q-tab
            v-for="tab in tabs"
            :key="`tab-${tab}`"
            slot="title"
            :name="tab"
            :label="tab"
          />

          <q-tab-pane
            v-for="tab in tabs"
            :key="`pane-${tab}`"
            :name="tab"
            class="q-pa-none"
          >
            <code-markup language="markup">{{ parts[tab] }}</code-markup>
          </q-tab-pane>
        </q-tabs>
      </div>
    </q-slide-transition>

    <div class="q-pa-sm">
      <component :is="component" />
    </div>
  </q-card>
</template>

<script>
import CodeMarkup from './CodeMarkup.vue'

export default {
  name: 'CodeExample',
  components: {
    CodeMarkup
  },
  props: {
    title: String,
    file: String
  },
  data () {
    return {
      component: null,
      tabs: [],
      currentTab: 'template',
      expanded: false,
      parts: {}
    }
  },
  mounted () {
    import(
      /* webpackChunkName: "demo" */
      /* webpackMode: "lazy-once" */
      `examples/${this.file}.vue`
    ).then(comp => {
      this.component = comp.default
    })

    import(
      /* webpackChunkName: "demo-source" */
      /* webpackMode: "lazy-once" */
      `!raw-loader!examples/${this.file}.vue`
    ).then(comp => {
      this.parseComponent(comp.default)
    })
  },
  methods: {
    parseComponent (comp) {
      const
        template = this.parseTemplate('template', comp),
        script = this.parseTemplate('script', comp),
        style = this.parseTemplate('style', comp)

      this.parts = {
        template,
        script,
        style
      }
      this.tabs = ['template', 'script', 'style'].filter(type => this.parts[type])
    },
    parseTemplate (target, template) {
      const
        string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
        regex = new RegExp(string, 'g'),
        parsed = regex.exec(template) || []

      return parsed[1] || ''
    }
  }
}
</script>

<style lang="stylus">
.code-example
  .q-tabs-head
    padding 0
  .q-tabs-panes
    border 0 !important
</style>
