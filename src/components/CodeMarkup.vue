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

  transition(
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  )
    .absolute(
      v-show="copied"
      class="text-white"
      style="top: 18px; right: 58px;"
    ) Copied to clipboard
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-stylus.js'

import CodePrism from './CodePrism.js'

export default {
  name: 'CodeMarkup',

  components: {
    CodePrism
  },

  props: {
    language: String
  },

  data: () => ({ copied: false }),

  methods: {
    copyToClipboard () {
      const markup = this.$el.querySelector('pre')

      markup.setAttribute('contenteditable', 'true')
      markup.focus()
      document.execCommand('selectAll', false, null)
      document.execCommand('copy')
      markup.removeAttribute('contenteditable')

      if (window.getSelection) {
        const sel = window.getSelection()

        if (sel.removeAllRanges) {
          sel.removeAllRanges()
        }
        else if (sel.empty) {
          sel.empty()
        }
      }
      else if (document.selection) {
        document.selection.empty && document.selection.empty()
      }

      this.copied = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.copied = false
        this.timer = null
      }, 2000)
    }
  }
}
</script>

<style lang="stylus">
.code-markup
  font-size 12px
  pre
    border-radius 0
    margin 0
</style>
