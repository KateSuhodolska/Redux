export const add = "USER/ADD";
export const remove = "USER/REMOVE";

const initState = {
    usersList: [],
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case add:
            {
                const newUser = action.payload;
                return {
                    ...state,
                    usersList: [...state.usersList].concat(newUser),
                };
            }

        case remove:
            {
                const newUsersList = state.usersList.filter(
                    (el) => el.id !== action.payload
                );
                return {
                    ...state,
                    usersList: newUsersList,
                };
            }

        default:
            return state;
    }
};