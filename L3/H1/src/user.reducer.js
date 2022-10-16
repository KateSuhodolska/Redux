export const userReducer = (state = null, action) => {
    switch (action.type) {
        case "USER/ADD":
            return action.payload;
        case "USER/REMOVE":
            return null;
        default:
            return state;
    }
};