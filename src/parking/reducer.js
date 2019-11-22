const actions = {
  FILTER_CAR : 'parkingTable/filterCar',
  ADD_CAR : 'parkingTable/addCar',
}

export function filterCars(payload) {
  return {
    type: actions.FILTER_CAR,
    payload
  }
}

export function addCar(payload) {
  return {
    type: actions.ADD_CAR,
    payload
  }
}

const initialState = {
  reg: "",
  color: ''
}


function filterReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FILTER_CAR:
      return action.payload;
    default:
      return state
  }
}

export default filterReducer;