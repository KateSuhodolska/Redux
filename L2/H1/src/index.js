import store from "./store";
import { addUser, deleteUser } from "./users.actions";

console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addUser({ id: 1, name: "Tom" }));
store.dispatch(addUser({ id: 2, name: "John" }));
store.dispatch(addUser({ id: 3, name: "Anna" }));
store.dispatch(deleteUser(3));