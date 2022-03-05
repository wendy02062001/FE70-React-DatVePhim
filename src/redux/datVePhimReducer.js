const stateDefault = {
  cusName: "Nguyen Van A",
  numSeat: 0,
  arrSelectedSeat: [],
};

export const datVePhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_SEAT": {
      let seats = [...state.arrSelectedSeat];
      if (!action.ghe.daDat) {
        seats.push(action.ghe);
        action.ghe.daDat = true;
      }
      state.arrSelectedSeat = seats;
      return { ...state };
    }

    case "REMOVE_SEAT": {
      let seats = [...state.arrSelectedSeat];
      seats = seats.filter((seat) => seat.soGhe !== action.maGhe);
      state.arrSelectedSeat = seats;
      return { ...state };
    }
    default:
      return state;
  }
};
