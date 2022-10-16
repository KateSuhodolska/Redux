export const cartReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "CART/ADD":
            return {
                ...state,
                products: state.products.concat(action.payload.productData),
            };

        case "CART/REMOVE":
            const newProductsList = state.products.filter(
                (product) => product.id !== action.payload.id
            );
            return {
                ...state,
                products: newProductsList,
            };
        default:
            return state;
    }
};