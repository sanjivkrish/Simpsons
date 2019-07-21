import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/_store'

const store = createStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>