export const setLanguage = (lang) => {
    return {
        type: "LANGUAGE/CHANGE",
        payload: {
            lang,
        },
    };
};