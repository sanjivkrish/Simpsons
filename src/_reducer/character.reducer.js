export function character(state = {}, action) {
  switch (action.type) {
    case 'GET_CHARACTERS_SUCCESS':
      return Object.assign({}, state, {
        characters : action.characters
      });
    case 'GET_CHARACTERS_FAILURE':
      return Object.assign({}, state, {
        characters : [],
        error : action.error
      });
    case 'SET_ACTIVE_CHARACTER':
      return Object.assign({}, state, {
        activeCharacter : action.activeCharacter
      });
    case 'GET_QUOTES_SUCCESS':
      return Object.assign({}, state, {
        quotes : action.quotes
      });
    case 'GET_QUOTES_FAILURE':
      return Object.assign({}, state, {
        quotes : [],
        error : action.error
      });
    default:
      return state
  }
}