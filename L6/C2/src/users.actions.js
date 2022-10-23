import { SHOW_SPINNER, USER_DATA_RECIEVED } from "./users.reducer";
const baseUrl = "https://api.github.com/users";

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
    };
};

export const userDataRecieved = (userData) => {
    return {
        type: USER_DATA_RECIEVED,
        payload: userData,
    };
};

export const fetchUserData = (userName) => {
    return function(dispatch) {
        fetch(`${baseUrl}/${userName}`)
            .then((response) => response.json())
            .then((userData) => dispatch(userDataRecieved(userData)));
    };
};