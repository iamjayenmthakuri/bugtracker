import * as actions from "./action.Types";
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
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

export const bugResolved = (id) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  };
};
