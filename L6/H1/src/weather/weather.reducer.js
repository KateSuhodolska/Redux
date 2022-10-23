import { WEATHER_DATA_RECEIVED } from "./weather.actions";

export const weatherReducer = (state = [], action) => {
    switch (action.type) {
        case WEATHER_DATA_RECEIVED:
            return action.payload;

        default:
            return state;
    }
};