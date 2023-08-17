// actions.js
export const setContientFilter = (continents) => {
  return { type: "SET_CONTIENT_FILTER", payload: continents };
};

export const setPoblacionFilter = (population) => {
  return { type: "SET_POPULATION_FILTER", payload: population };
};

export const setOrderByName = (order) => {
  return { type: "SET_ORDER_BY_NAME", payload: order };
};
