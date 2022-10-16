export const userReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case "USER/ADD":
            return {
                ...state,
                user: action.payload.userData,
            };
        case "USER/REMOVE":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};