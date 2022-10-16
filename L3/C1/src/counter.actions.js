export const increment = () => {
    return {
        type: "COUNTER/INCREMENT",
    };
};

export const decrement = () => {
    return {
        type: "COUNTER/DECREMENT",
    };
};

export const reset = () => {
    return {
        type: "COUNTER/RESET",
    };
};