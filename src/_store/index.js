import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { character } from '../_reducer/character.reducer';

export const store = createStore(
    character,
    applyMiddleware(thunkMiddleware)
);