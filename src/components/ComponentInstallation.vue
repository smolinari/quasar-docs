<template lang="pug">
.component-installation.shadow-2.q-my-xl
  q-toolbar(text-color="grey-7", color="grey-2")
    .q-subtitle Installation

  q-tabs(v-model="currentTab", inverted, color="grey-7", no-pane-border)
    q-tab(
      v-for="tab in ['Quasar CLI', 'UMD', 'Vue CLI']"
      :key="`installation-${tab}`"
      slot="title"
      :name="tab"
      :label="tab"
    )

    q-tab-pane.q-pa-none(name="Quasar CLI")
      code-markup(copy) {{ QuasarCli }}

    q-tab-pane.q-pa-none(name="UMD")
      code-markup(copy) {{ UMD }}

    q-tab-pane.q-pa-none(name="Vue CLI")
      code-markup(copy) {{ VueCli }}
</template>

<script>
import CodeMarkup from './CodeMarkup.vue'

export default {
  name: 'ComponentInstallation',
  components: {
    CodeMarkup
  },
  props: {
    components: [Array, String],
    directives: [Array, String],
    plugins: [Array, String],
    config: Object // TODO
  },
  data () {
    return {
      currentTab: 'Quasar CLI'
    }
  },
  methods: {
    nameAsString (name, indent, quotes = true) {
      const wrapper = quotes
        ? str => `'${str}'`
        : str => str

      return Array.isArray(name)
        ? name.map(wrapper).join(',\n' + ''.padStart(indent, ' '))
        : wrapper(name)
    }
  },
  computed: {
    computedConfig () {
      return Object.keys(this.config)
        .map(name => `${name}: { /* ${this.config[name]} defaults */ }`)
    },
    QuasarCli () {
      const parts = []

      ;['components', 'directives', 'plugins'].forEach(type => {
        if (this[type]) {
          parts.push(`${type}: [
      ${this.nameAsString(this[type], 6)}
    ]`)
        }
      })

      if (this.config) {
        parts.push(`config: {
      // optional (v0.17+)
      ${this.computedConfig.join('\n' + ''.padStart(6, ' '))}
    }`)
      }

      return `// quasar.conf.js

return {
  framework: {
    ${parts.join(',\n    ')}
  }
}`
    },
    UMD () {
      return `/*
 * No installation step is necessary.
 * It gets installed by default.
 */`
    },

    VueCli () {
      const types = [], imports = [], parts = []

      ;['components', 'directives', 'plugins'].forEach(type => {
        if (this[type]) {
          types.push(type)
          imports.push(this.nameAsString(this[type], 2, false))
          parts.push(`const ${type} = {
  ${this.nameAsString(this[type], 2, false)}
}
`)
        }
      })

      if (this.config) {
        types.push(`config: {
    // optional (v0.17+)
    ${this.computedConfig.join('\n' + ''.padStart(4, ' '))}
  }`)
      }

      return `// main.js

// This is needed ONLY if NOT chosen to import everything from Quasar
// when you installed vue-cli-plugin-quasar.

import {
  Quasar,
  ${imports.join(',\n  ')}
} from 'quasar'

${parts.join('\n')}
Vue.use(Quasar, {
  ${types.join(',\n  ')}
})`
    }
  }
}
</script>

<style lang="stylus">
.component-installation
  .q-tabs-head
    padding 0
  .q-tabs-panes
    border 0 !important
  .code-markup pre
    border-radius 0
</style>
