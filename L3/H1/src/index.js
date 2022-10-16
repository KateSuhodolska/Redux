import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(setLanguage("uk"));
store.dispatch(addProduct(1, { product: "ball" }));
store.dispatch(setUser({ name: "Tom" }));
store.dispatch(removeUser());