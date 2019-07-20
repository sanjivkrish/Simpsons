import { characterService } from "../_services/character.service"

export const characterAction = {
    getAllCharacters,
    getQuotesByCharacter
}

function getAllCharacters() {
    return dispatch => {
        characterService.getAllCharacters()
            .then(
                characters => {
                    dispatch({ type : "GET_CHARACTERS_SUCCESS", characters })
                },
                error => {
                    dispatch({ type : "GET_CHARACTERS_FAILURE", error })
                }
            )
    }
}

function getQuotesByCharacter(name) {
    const charName = name.split(' ').join('-');

    return dispatch => {
        characterService.getQuotesByCharacter(charName)
            .then(
                quotes => {
                    dispatch({ type : "GET_QUOTES_SUCCESS", quotes })
                },
                error => {
                    dispatch({ type : "GET_QUOTES_SUCCESS", error })
                }
            )
    }
} 