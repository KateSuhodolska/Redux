export const SHOW_SPINNER = "SHOW_SPINNER";
export const USER_DATA_RECIEVED = "USER_DATA_RECIEVED";

const initState = {
    isFetching: false,
    userData: null,
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                isFetching: true,
            };
        case USER_DATA_RECIEVED:
            return {
                ...state,
                userData: action.payload,
                isFetching: false,
            };

        default:
            return state;
    }
};