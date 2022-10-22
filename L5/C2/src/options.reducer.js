import { toggle } from "./options.actions";

const options = [{
        id: "id-0",
        name: "19-inch wheels",
    },
    {
        id: "id-1",
        name: "Leather-trimmed Sport Seats",
    },
    {
        id: "id-2",
        name: "B&O Sound System",
    },
    {
        id: "id-3",
        name: "Adaptive Cruise Control",
    },
    {
        id: "id-4",
        name: "Daytime running lights",
    },
    {
        id: "id-5",
        name: "Auto High-Beam Headlamps",
    },
    {
        id: "id-6",
        name: "Carbon Sport Interior",
    },
];

const initState = {
    optionsList: options,
    selected: [],
};

export const optionsReducer = (state = initState, action) => {
    switch (action.type) {
        case toggle:
            const optId = action.payload;
            const newSelectedOpt = state.selected.includes(optId) ?
                state.selected.filter((id) => id !== optId) :
                state.selected.concat(optId);
            return {
                ...state,
                selected: newSelectedOpt,
            };
        default:
            return state;
    }
};