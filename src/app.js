import * as riot from 'riot'
import reload from '@riotjs/hot-reload'

import Page from './containers/page.riot'
import './assets/styles/app.css'

const root = riot.component(Page)
reload(root)
root(document.querySelector('#app'))
