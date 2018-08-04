<template lang="pug">
.code-markup.relative-position
  code-prism(:language="language")
    slot
  .absolute(style="top: 8px; right: 8px;")
    q-btn(
      color="white"
      round
      dense
      flat
      icon="content_copy"
      @click="copyToClipboard"
    )
      q-tooltip(:offset="[0, 10]") Copy to Clipboard
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-stylus.js'
import 'prismjs/components/prism-typescript.js'

import CodePrism from './CodePrism.js'

export default {
  name: 'CodeMarkup',

  components: {
    CodePrism
  },

  props: {
    language: String
  },

  methods: {
    copyToClipboard () {
      const markup = this.$el.querySelector('pre')

      markup.setAttribute('contenteditable', 'true')
      markup.focus()
      document.execCommand('selectAll', false, null)
      document.execCommand('copy')
      markup.removeAttribute('contenteditable')
    }
  }
}
</script>

<style lang="stylus">
.code-markup
  font-size 12px
  pre
    margin 0
</style>
