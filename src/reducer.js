/* eslint-disable eqeqeq */
let lastId = 0;
export default function reducer(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id != action.payload.id);
  }
}
