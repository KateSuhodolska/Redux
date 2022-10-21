import { nextPage, prevPage } from "./users.reducer";

export const goToNextPage = () => {
    return {
        type: nextPage,
    };
};

export const goToPrevPage = () => {
    return {
        type: prevPage,
    };
};