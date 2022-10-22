export const optionsListSelector = (state) => {
    return state.optionsList;
};

export const selectedOptSelector = (state) => {
    return state.selected;
};

export const availableOptionsSelector = (state) => {
    return state.optionsList.filter(
        (option) => !state.selected.includes(option.id)
    );
};

export const selectedOptionsSelector = (state) => {
    return state.optionsList.filter((option) =>
        state.selected.includes(option.id)
    );
};