import { ADD_PRODUCT, DELETE_PRODUCT } from "./cart.actions.js";

const initState = {
    products: [],
};

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            {
                return {
                    ...state,
                    products: [...state.products].concat(action.payload),
                };
            }

        case DELETE_PRODUCT:
            {
                const newProductsList = state.products.filter(
                    (el) => el.id !== action.payload
                );

                return {
                    ...state,
                    products: newProductsList,
                };
            }

        default:
            return state;
    }
};