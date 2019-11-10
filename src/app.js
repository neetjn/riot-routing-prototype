import * as riot from 'riot'
import Page from './containers/page.riot'
import './assets/styles/app.css'

const component = riot.component(Page)

import reload from '@riotjs/hot-reload'
reload(component)

// NOT PART OF ACTUAL PACKAGE
// GLOBAL STATE EXAMPLE
const router = { route: null, components: [] }
riot.install((component) => {
  component.router = router
})

component(document.querySelector('#app'))
