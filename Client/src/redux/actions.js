

export const setContinentFilter = (continents) => {
  return {
    type: "SET_CONTIENT_FILTER",
    payload: continents,
  };
};

export const setActivityFilter = (activityFilter) => ({
  type: "SET_ACTIVITY_FILTER",
  payload: activityFilter,
});

export const setSortOrder = (order) => ({
  type: "SET_SORT_ORDER",
  payload: order,
});

export const setPopulationFilter = (population) => ({
  type: "SET_POPULATION_FILTER",
  payload: population,
})
    
  




