const config = {
    baseUrl :  "https://futuramaapi.herokuapp.com",
    characters : "/api/v2/characters",
    quotesByCharacter : "/api/characters/"
}

export const characterService = {
    getAllCharacters,
    getQuotesByCharacter,
    getCharactersByQuery
};

// Handle response for all API
function handleResponse(response) {
    return response.text().then(res => {
        const data = JSON.parse(res);
        
        if (!response.ok) return Promise.reject(data || response.statusText);

        return data;
    });
}

function getAllCharacters() {
    const targetURL = `${config.baseUrl}${config.characters}`;

    return fetch(targetURL).then(handleResponse);
}

function getQuotesByCharacter(name) {
    const targetURL = `${config.baseUrl}${config.quotesByCharacter}${name}`;

    return fetch(targetURL).then(handleResponse);
}

function getCharactersByQuery(name) {
    const targetURL = `${config.baseUrl}${config.characters}?search=${name}`;

    return fetch(targetURL).then(handleResponse);
}