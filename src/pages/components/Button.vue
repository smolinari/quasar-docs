<template lang="pug">
q-page(padding)
  .q-headline Button

  section.q-title#introduction Introduction
  p Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.
  p Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.

  p.q-my-lg.text-white.bg-red Design requirement: 6 level typography for page titles/sections

  p.q-my-lg.text-white.bg-red Design requirement: Footer with general links

  p Some code markup
  code-markup(lang="bash")
    | $ quasar dev -m ssr
    | # some comment
    | $ quasar build

  p.q-mt-lg.text-white.bg-red Design requirement: Token
  div text, more text, a <q-chip small square>token</q-chip>, some more text.

  p.q-mt-lg.text-white.bg-red Design requirement: Simple table
  table.q-mb-lg
    thead
      tr
        th Property
        th Type
        th Description
    tbody
      tr
        td color
        td String
        td The color the QInput should have. The default is primary.
      tr
        td inverted
        td Boolean
        td Set to true, to color field&rsquo;s background set by the color prop.
      tr
        td dark
        td Boolean
        td
          | Set to true, if the field is on a dark background. It will invert the text color to make it light.
      tr
        td align
        td Text
        td
          | Controls the &lsquo;right&rsquo;, &lsquo;center&rsquo; or &lsquo;left&rsquo; alignment of the input. The default is &lsquo;left&rsquo;.

  p The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

  section.q-title#installation Installation
  p When not disabled or spinning, QBtn emits a @click event, as soon as it is clicked or tapped.

  component-installation(
    :components="['QBtn', 'QToggleBtn']"
  )
  component-installation(
    components="QBtn"
  )

  component-installation(
    components="QBtn"
    :plugins="['Meta', 'Cookies']"
    directives="Ripple"
    :config="{ notify: 'Notify' }"
  )

  section.q-title#usage Usage
  code-example(title="Standard", file="Button/Standard")

  p Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.

  p The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

  p When not disabled or spinning, QBtn emits a @click event, as soon as it is clicked or tapped.

  section.q-title#api Component API
  component-api(:api="api")
</template>

<script>
import CodeExample from 'components/CodeExample.vue'
import CodeMarkup from 'components/CodeMarkup.vue'
import ComponentApi from 'components/ComponentApi.vue'
import ComponentInstallation from 'components/ComponentInstallation.vue'

export default {
  name: 'Button',
  meta: {
    title: 'Button'
  },
  components: {
    CodeExample,
    CodeMarkup,
    ComponentApi,
    ComponentInstallation
  },
  data: () => ({
    page: 'Button',
    api: {
      props: [
        {name: 'icon', type: 'String', desc: 'Name of the icon to use', example: 'map'},
        {name: 'loading', type: 'Boolean', desc: 'Display a spinner, if true'}
      ],
      events: [
        {name: 'click', desc: 'Triggered on button click/tap, if button is not disabled'}
      ],
      methods: [
        {name: 'show', desc: 'Open Context Menu'},
        {name: 'show', desc: 'Open Context Menu'},
        {name: 'show', desc: 'Open Context Menu'},
        {name: 'show', desc: 'Open Context Menu'}
      ]
    }
  })
}
</script>
