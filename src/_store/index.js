import { createStore as reduxCreateStore } from 'redux'
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { character } from '../_reducer/character.reducer';

const createStore = () => reduxCreateStore(character, applyMiddleware(thunkMiddleware))
export default createStore