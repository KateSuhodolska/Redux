export const toggle = "TOGGLE_OPTION";

export const toggleOption = (id) => {
    return {
        type: toggle,
        payload: id,
    };
};