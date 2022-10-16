export const addProduct = ({ id, productName }) => {
    return {
        type: "CART/ADD",
        payload: {
            id,
            productName,
        },
    };
};

export const removeProduct = (id) => {
    return {
        type: "CART/REMOVE",
        payload: id,
    };
};