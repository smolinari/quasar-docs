<template lang="pug">
.component-api.shadow-2.q-my-xl
  q-toolbar.q-pa-none(color="grey-2", text-color="grey-7")
    q-tabs.self-stretch(v-model="currentTab", color="grey-2", text-color="grey-7")
      q-tab(
        v-for="tab in tabs"
        :key="`api-tab-${tab}`"
        slot="title"
        :name="tab"
        :label="tab"
      )
    .col
    .q-pr-sm
      q-search.bg-transparent(hide-underline, v-model="filter")
    hr.q-hr.absolute-bottom

  q-table.component-api.q-pa-sm(
    grid
    :data="api[currentTab]"
    :columns="columns[currentTab]"
    :filter="filter"
    hide-header
    hide-bottom
    row-key="name"
  )
    .col-12.q-my-xs(slot="item", slot-scope="props")
      .row.bg-grey-2.component-api-item
        .col-3
          .component-api-col Name
          .text-bold {{ props.row.name }}
        .col-3(v-if="props.row.default")
          .component-api-col Default
          div {{ props.row.default }}
        .col-3(v-if="props.row.type")
          .component-api-col Type
          .text-bold {{ props.row.type }}
        .col-3(v-if="props.row.example")
          .component-api-col Example
          .text-bold {{ props.row.example }}
        .component-api-desc.col-12.bg-grey-3.text-weight-light
          div {{ props.row.desc }}
</template>

<script>
export default {
  name: 'ComponentApi',
  props: {
    api: Object
  },
  data () {
    return {
      currentTab: 'props',
      filter: '',
      columns: {
        props: [
          {
            name: 'name',
            label: 'Name',
            field: 'name'
          },
          {
            name: 'default',
            label: 'Default',
            field: 'default'
          },
          {
            name: 'type',
            label: 'Type',
            field: 'type'
          },
          {
            name: 'desc',
            label: 'Description',
            field: 'desc'
          }
        ],
        events: [
          {
            name: 'name',
            label: 'Name',
            field: 'name'
          },
          {
            name: 'desc',
            label: 'Description',
            field: 'desc'
          }
        ],
        methods: [
          {
            name: 'name',
            label: 'Name',
            field: 'name'
          },
          {
            name: 'desc',
            label: 'Description',
            field: 'desc'
          }
        ]
      }
    }
  },
  beforeMount () {
    this.currentTab = this.tabs[0]
  },
  computed: {
    tabs () {
      return Object.keys(this.api)
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.component-api
  .q-tabs-head
    padding 0
  .q-hr
    margin 0
    bottom 1px
.component-api-item
  > div
    padding 8px
  font-size 80%
.component-api-col
  font-size 80%
</style>
