const initialState = {
  continentFilter: "",
  sortOrder: "asc",
  populationFilter: "asc",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTIENT_FILTER":
      return {
        ...state,
        continentFilter: action.payload,
      };

    case "SET_ACTIVITY_FILTER":
      return {
        ...state,
        activityFilter: action.payload,
      };

    case "SET_SORT_ORDER":
      return {
        ...state,
        sortOrder: action.payload,
      };

    case "SET_POPULATION_FILTER":
      return {
        ...state,
        populationFilter: action.payload,
      };
    default:
      return state;
  }
};
