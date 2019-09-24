import * as riot from 'riot'
import Page from './containers/page.riot'
import './assets/styles/app.css'

const component = riot.component(Page)

import reload from '@riotjs/hot-reload'
reload(component)

component(document.querySelector('#app'))
