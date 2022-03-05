const stateDefault = {
  cusName: "Nguyen Van A",
  numSeat: 0,
  arrSelectedSeat: [
    { soGhe: "A0", gia: 1000, daDat: true },
    { soGhe: "B0", gia: 1000, daDat: true },
    { soGhe: "C0", gia: 1000, daDat: true },
  ],
};

export const datVePhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
