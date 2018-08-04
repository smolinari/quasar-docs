<template>
  <q-page padding>
    <div class="q-headline">Button</div>
    <div>
      Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.
      <br>The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.
      <br>When not disabled or spinning, QBtn emits a @click event, as soon as it is clicked or tapped.
    </div>

    <code-example title="Standard" file="button/standard" />

    <div>
      Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.
      <br>The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.
      <br>When not disabled or spinning, QBtn emits a @click event, as soon as it is clicked or tapped.
    </div>

    <component-api :api="api" />
  </q-page>
</template>

<script>
import CodeExample from 'components/CodeExample.vue'
import ComponentApi from 'components/ComponentApi.vue'

export default {
  name: 'Button',
  meta: {
    title: 'Button'
  },
  components: {
    CodeExample,
    ComponentApi
  },
  data: () => ({
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
