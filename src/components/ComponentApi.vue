<template>
  <div class="component-api shadow-2 q-my-xl">
    <q-toolbar color="grey-2" text-color="grey-7" class="q-pa-none">
      <q-tabs
        v-model="currentTab"
        color="grey-2"
        text-color="grey-7"
        class="self-stretch"
      >
        <q-tab
          v-for="tab in tabs"
          :key="`api-tab-${tab}`"
          slot="title"
          :name="tab"
          :label="tab"
        />
      </q-tabs>
      <div class="col" />
      <div class="q-pr-sm">
        <q-search class="bg-transparent" hide-underline v-model="filter" />
      </div>
      <hr class="q-hr absolute-bottom" />
    </q-toolbar>

    <q-table
      grid
      :data="api[currentTab]"
      :columns="columns[currentTab]"
      :filter="filter"
      hide-header
      hide-bottom
      row-key="name"
      class="component-api q-pa-sm"
    >
      <div
        slot="item"
        slot-scope="props"
        class="col-12 q-my-xs"
      >
        <div class="row bg-grey-2 component-api-item">
          <div class="col-3">
            <div class="component-api-col">Name</div>
            <div class="text-bold">{{ props.row.name }}</div>
          </div>
          <div v-if="props.row.default" class="col-3">
            <div class="component-api-col">Default</div>
            <div>{{ props.row.default }}</div>
          </div>
          <div v-if="props.row.type" class="col-3">
            <div class="component-api-col">Type</div>
            <div class="text-bold">{{ props.row.type }}</div>
          </div>
          <div v-if="props.row.example" class="col-3">
            <div class="component-api-col">Example</div>
            <div class="text-bold">{{ props.row.example }}</div>
          </div>
          <div class="component-api-desc col-12 bg-grey-3 text-weight-light">
            <div>{{ props.row.desc }}</div>
          </div>
        </div>
      </div>
    </q-table>
  </div>
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
