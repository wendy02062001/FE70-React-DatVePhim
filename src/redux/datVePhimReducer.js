const stateDefault = {
  cusName: "Nguyen Van A",
  numSeat: 0,
  arrSelectedSeat: [],
};

export const datVePhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_SEAT": {
      let seats = [...state.arrSelectedSeat];
      let isSelected = seats.find((seat) => seat.soGhe === action.ghe.soGhe);
      if (!isSelected) {
        seats.push(action.ghe);
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

    case "CONFIRM_SELECTION": {
      let seats = [...state.arrSelectedSeat];
      if (window.confirm("Are you sure to confirm your seats?")) {
        for (let seat of seats) {
          seat.daDat = true;
          console.log(seat);
        }

        state.arrSelectedSeat = seats;

        return { ...state };
      }
    }
    default:
      return state;
  }
};
