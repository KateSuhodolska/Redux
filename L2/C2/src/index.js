import "./styles.scss";
import { store, increment, decrement, reset } from "./store";

const results = document.querySelector(".counter__result");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onDecrement = () => {
    store.dispatch(decrement());
};
const onIncrement = () => {
    store.dispatch(increment());
};
const onReset = () => {
    store.dispatch(reset());
};

store.subscribe(() => {
    const state = store.getState();
    const currentValue = state.history.reduce((acc, val) => acc + val, 0);
    const historyString = state.history
        .map((el) => (el > 0 ? `+${el}` : el))
        .join("");
    results.textContent =
        state.history.length === 0 ? "" : `${historyString} = ${currentValue}`;
});

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);
resetBtn.addEventListener("click", onReset);