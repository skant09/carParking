const actions = {
  REMOVE_CAR : 'parkingTable/removeCar',
  ADD_CAR : 'parkingTable/addCar',
}

export function removeCar (payload) {
  return {
    type: actions.REMOVE_CAR,
    payload
  }
}

const initialState = {
  totalMoney: 0,
  emptySlots: [1, 2, 3],
  cars : []
  //   {
  //     reg: "KA-64-yx-0619",
  //     color: 'Red',
  //     time: Date.now(),
  //   },
  //   {
  //     reg: "KA-64-yx-0620",
  //     color: 'Red',
  //     time: Date.now(),
  //   },
  //   {
  //     reg: "KA-64-yx-0621",
  //     color: 'Red',
  //     time: Date.now(),
  //   }
  // ]
}

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case actions.REMOVE_CAR:
      state.cars = state.cars.filter((v, i) => v.reg !== action.payload.reg);
      state.emptySlots = [...state.emptySlots, action.payload.slot];
      state.totalMoney = state.totalMoney+20;
      return {...state, cars: state.cars};
    case actions.ADD_CAR:
      let car = {...action.payload, slot: state.emptySlots[0]};
      state.emptySlots = state.emptySlots.filter(v => v !== state.emptySlots[0]);
      let cars = [...state.cars, car];
      return {...state, cars}
    default:
      return state
  }
}

export default tableReducer;