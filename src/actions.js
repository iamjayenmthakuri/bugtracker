import * as actions from "./action.Types";
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: "Bug1",
    },
  };
}

// export const bugAdded = (description) => {
//     return {
//       type: actions.BUG_ADDED,
//       payload: {
//         description: "Bug1",
//       },
//     };
//   };
