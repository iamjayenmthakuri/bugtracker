import store from "./store";
import { bugAdded } from "./actions";
import * as actions from "./action.Types";

const unsubscribe = store.subscribe(() => {
  console.log("Store Change!", store.getState());
});

store.dispatch(bugAdded("BUG 1"));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
