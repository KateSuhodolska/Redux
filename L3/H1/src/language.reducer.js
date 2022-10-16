const initState = {
    language: "en",
};

export const languageReducer = (state = initState, action) => {
    switch (action.type) {
        case "LANGUAGE/CHANGE":
            return {
                ...state,
                language: action.payload.lang,
            };

        default:
            return state;
    }
};