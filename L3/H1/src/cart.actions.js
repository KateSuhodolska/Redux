export const addProduct = (id, productData) => {
    return {
        type: "CART/ADD",
        payload: {
            id,
            productData,
        },
    };
};

export const removeProduct = (id) => {
    return {
        type: "CART/REMOVE",
        payload: { id },
    };
};