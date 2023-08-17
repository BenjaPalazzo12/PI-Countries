const initialState = {
  continentFilter: "",
  ORDER_BY_NAME: "asc",
  populationFilter: "asc",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTIENT_FILTER":
      return {
        ...state,
        continentFilter: action.payload,
      };
    case "SET_POPULATION_FILTER":
      return {
        ...state,
        populationFilter: action.payload,
      };
    case "SET_ORDER_BY_NAME":
      return {
        ...state,
        ORDER_BY_NAME: action.payload,
      };
    default:
      return state;
  }
};
