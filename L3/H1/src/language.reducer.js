export const languageReducer = (state = "en", action) => {
    switch (action.type) {
        case "LANGUAGE/CHANGE":
            return action.payload;

        default:
            return state;
    }
};