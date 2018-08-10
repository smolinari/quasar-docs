import Menu from 'assets/menu.js'

export default {
  name: 'AppDrawer',
  methods: {
    getDrawerMenu (h, menu, path) {
      if (menu.children) {
        return h(
          'q-collapsible',
          {
            props: { label: menu.name }
          },
          menu.children.map(item => this.getDrawerMenu(h, item, path + '/' + item.path))
        )
      }

      return h('q-item', {
        props: {
          to: path,
          label: menu.name
        }
      }, [
        h('q-item-main', {
          props: { label: menu.name }
        })
      ])
    }
  },
  render (h) {
    return h('q-list', {
      props: { noBorder: true }
    }, Menu.map(
      item => this.getDrawerMenu(h, item, '/' + item.path)
    ))
  }
}
