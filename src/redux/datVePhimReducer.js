const stateDefault = {
  numSeat: 0,
  arrSelectedSeat: [],
  arrBookedSeat: [],
};

export const datVePhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_SEAT": {
      let seats = [...state.arrSelectedSeat];
      let isSelected = seats.find((seat) => seat.soGhe === action.ghe.soGhe);
      if (!isSelected) {
        seats.push(action.ghe);
        state.numSeat += 1;
      }
      state.arrSelectedSeat = seats;
      return { ...state };
    }

    case "REMOVE_SEAT": {
      let seats = [...state.arrSelectedSeat];
      seats = seats.filter((seat) => seat.soGhe !== action.maGhe);
      state.arrSelectedSeat = seats;
      state.numSeat -= 1;
      return { ...state };
    }

    case "CONFIRM_SELECTION": {
      let seats = [...state.arrSelectedSeat];
      let booked = [...state.arrBookedSeat];
      if (window.confirm("Are you sure to confirm your seats?")) {
        for (let seat of seats) {
          seat.daDat = true;
          booked.push(seat);
        }

        state.arrSelectedSeat = [];
        state.arrBookedSeat = booked;

        return { ...state };
      }
    }
    default:
      return state;
  }
};
