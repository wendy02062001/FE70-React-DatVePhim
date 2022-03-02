import React, { Component, Fragment } from "react";
import SoDoGhe from "./SoDoGhe";
import "./style.css";

export default class BTDatVePhim extends Component {
  dataGhe = [
    {
      hang: "",
      danhSachGhe: [
        { soGhe: "1", gia: 0 },
        { soGhe: "2", gia: 0 },
        { soGhe: "3", gia: 0 },
        { soGhe: "4", gia: 0 },
        { soGhe: "5", gia: 0 },
        { soGhe: "6", gia: 0 },
        { soGhe: "7", gia: 0 },
        { soGhe: "8", gia: 0 },
        { soGhe: "9", gia: 0 },
        { soGhe: "10", gia: 0 },
        { soGhe: "11", gia: 0 },
        { soGhe: "12", gia: 0 },
      ],
    },
    {
      hang: "A",
      danhSachGhe: [
        { soGhe: "A1", gia: 75000, daDat: false },
        { soGhe: "A2", gia: 75000, daDat: false },
        { soGhe: "A3", gia: 75000, daDat: false },
        { soGhe: "A4", gia: 75000, daDat: false },
        { soGhe: "A5", gia: 75000, daDat: false },
        { soGhe: "A6", gia: 75000, daDat: false },
        { soGhe: "A7", gia: 75000, daDat: false },
        { soGhe: "A8", gia: 75000, daDat: false },
        { soGhe: "A9", gia: 75000, daDat: false },
        { soGhe: "A10", gia: 75000, daDat: false },
        { soGhe: "A11", gia: 0, daDat: false },
        { soGhe: "A12", gia: 0, daDat: false },
      ],
    },
    {
      hang: "B",
      danhSachGhe: [
        { soGhe: "B1", gia: 75000, daDat: false },
        { soGhe: "B2", gia: 75000, daDat: false },
        { soGhe: "B3", gia: 75000, daDat: false },
        { soGhe: "B4", gia: 75000, daDat: false },
        { soGhe: "B5", gia: 75000, daDat: false },
        { soGhe: "B6", gia: 75000, daDat: false },
        { soGhe: "B7", gia: 75000, daDat: false },
        { soGhe: "B8", gia: 75000, daDat: false },
        { soGhe: "B9", gia: 75000, daDat: false },
        { soGhe: "B10", gia: 75000, daDat: false },
        { soGhe: "B11", gia: 75000, daDat: false },
        { soGhe: "B12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "C",
      danhSachGhe: [
        { soGhe: "C1", gia: 75000, daDat: false },
        { soGhe: "C2", gia: 75000, daDat: false },
        { soGhe: "C3", gia: 75000, daDat: false },
        { soGhe: "C4", gia: 75000, daDat: false },
        { soGhe: "C5", gia: 75000, daDat: false },
        { soGhe: "C6", gia: 75000, daDat: false },
        { soGhe: "C7", gia: 75000, daDat: false },
        { soGhe: "C8", gia: 75000, daDat: false },
        { soGhe: "C9", gia: 75000, daDat: false },
        { soGhe: "C10", gia: 75000, daDat: false },
        { soGhe: "C11", gia: 75000, daDat: false },
        { soGhe: "C12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "D",
      danhSachGhe: [
        { soGhe: "D1", gia: 75000, daDat: false },
        { soGhe: "D2", gia: 75000, daDat: false },
        { soGhe: "D3", gia: 75000, daDat: false },
        { soGhe: "D4", gia: 75000, daDat: false },
        { soGhe: "D5", gia: 75000, daDat: false },
        { soGhe: "D6", gia: 75000, daDat: false },
        { soGhe: "D7", gia: 75000, daDat: false },
        { soGhe: "D8", gia: 75000, daDat: false },
        { soGhe: "D9", gia: 75000, daDat: false },
        { soGhe: "D10", gia: 75000, daDat: false },
        { soGhe: "D11", gia: 75000, daDat: false },
        { soGhe: "D12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "E",
      danhSachGhe: [
        { soGhe: "E1", gia: 75000, daDat: false },
        { soGhe: "E2", gia: 75000, daDat: false },
        { soGhe: "E3", gia: 75000, daDat: false },
        { soGhe: "E4", gia: 75000, daDat: false },
        { soGhe: "E5", gia: 75000, daDat: false },
        { soGhe: "E6", gia: 75000, daDat: false },
        { soGhe: "E7", gia: 75000, daDat: false },
        { soGhe: "E8", gia: 75000, daDat: false },
        { soGhe: "E9", gia: 75000, daDat: false },
        { soGhe: "E10", gia: 75000, daDat: false },
        { soGhe: "E11", gia: 75000, daDat: false },
        { soGhe: "E12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "F",
      danhSachGhe: [
        { soGhe: "F1", gia: 75000, daDat: false },
        { soGhe: "F2", gia: 75000, daDat: false },
        { soGhe: "F3", gia: 75000, daDat: false },
        { soGhe: "F4", gia: 75000, daDat: false },
        { soGhe: "F5", gia: 75000, daDat: false },
        { soGhe: "F6", gia: 75000, daDat: false },
        { soGhe: "F7", gia: 75000, daDat: false },
        { soGhe: "F8", gia: 75000, daDat: false },
        { soGhe: "F9", gia: 75000, daDat: false },
        { soGhe: "F10", gia: 75000, daDat: false },
        { soGhe: "F11", gia: 75000, daDat: false },
        { soGhe: "F12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "G",
      danhSachGhe: [
        { soGhe: "G1", gia: 75000, daDat: false },
        { soGhe: "G2", gia: 75000, daDat: false },
        { soGhe: "G3", gia: 75000, daDat: false },
        { soGhe: "G4", gia: 75000, daDat: false },
        { soGhe: "G5", gia: 75000, daDat: false },
        { soGhe: "G6", gia: 75000, daDat: false },
        { soGhe: "G7", gia: 75000, daDat: false },
        { soGhe: "G8", gia: 75000, daDat: false },
        { soGhe: "G9", gia: 75000, daDat: false },
        { soGhe: "G10", gia: 75000, daDat: false },
        { soGhe: "G11", gia: 75000, daDat: false },
        { soGhe: "G12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "H",
      danhSachGhe: [
        { soGhe: "H1", gia: 75000, daDat: false },
        { soGhe: "H2", gia: 75000, daDat: false },
        { soGhe: "H3", gia: 75000, daDat: false },
        { soGhe: "H4", gia: 75000, daDat: false },
        { soGhe: "H5", gia: 75000, daDat: false },
        { soGhe: "H6", gia: 75000, daDat: false },
        { soGhe: "H7", gia: 75000, daDat: false },
        { soGhe: "H8", gia: 75000, daDat: false },
        { soGhe: "H9", gia: 75000, daDat: false },
        { soGhe: "H10", gia: 75000, daDat: false },
        { soGhe: "H11", gia: 75000, daDat: false },
        { soGhe: "H12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "I",
      danhSachGhe: [
        { soGhe: "I1", gia: 75000, daDat: false },
        { soGhe: "I2", gia: 75000, daDat: false },
        { soGhe: "I3", gia: 75000, daDat: false },
        { soGhe: "I4", gia: 75000, daDat: false },
        { soGhe: "I5", gia: 75000, daDat: false },
        { soGhe: "I6", gia: 75000, daDat: false },
        { soGhe: "I7", gia: 75000, daDat: false },
        { soGhe: "I8", gia: 75000, daDat: false },
        { soGhe: "I9", gia: 75000, daDat: false },
        { soGhe: "I10", gia: 75000, daDat: false },
        { soGhe: "I11", gia: 75000, daDat: false },
        { soGhe: "I12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "J",
      danhSachGhe: [
        { soGhe: "J1", gia: 75000, daDat: false },
        { soGhe: "J2", gia: 75000, daDat: false },
        { soGhe: "J3", gia: 75000, daDat: false },
        { soGhe: "J4", gia: 75000, daDat: false },
        { soGhe: "J5", gia: 75000, daDat: false },
        { soGhe: "J6", gia: 75000, daDat: false },
        { soGhe: "J7", gia: 75000, daDat: false },
        { soGhe: "J8", gia: 75000, daDat: false },
        { soGhe: "J9", gia: 75000, daDat: false },
        { soGhe: "J10", gia: 75000, daDat: false },
        { soGhe: "J11", gia: 75000, daDat: false },
        { soGhe: "J12", gia: 75000, daDat: false },
      ],
    },
  ];
  render() {
    return (
      <div className="py-4">
        <h1 className="text-center my-4">MOVIE SEAT SELECTION</h1>
        <div className="container">
          <div className="form__container">
            <h4 className="form__title text-danger mb-4">
              Fill The Required Details Below And Select Your Seats
            </h4>
            <div className="row mb-3">
              <div className="col-6">
                <label>
                  Name <span style={{ color: "red" }}>*</span>:
                </label>
                <input className="form-control" required></input>
              </div>
              <div className="col-6">
                <label>
                  Number of Seats <span style={{ color: "red" }}>*</span>:
                </label>
                <input
                  className="form-control"
                  type="number"
                  min="1"
                  required
                ></input>
              </div>
            </div>

            <button className="btn btn-light w-25 my-2">Start selecting</button>

            <div className="row my-3">
              <div className=" col-4 seatSquare greenSquare">Selected Seat</div>
              <div className=" col-4 seatSquare redSquare">Reserved Seat</div>
              <div className=" col-4 seatSquare whiteSquare">Empty Seat</div>
            </div>

            <div className="seatSelection text-center">
              <div className="seat__container">
                <h5 className="alert-danger py-2 my-3">
                  Please Select Your Seat NOW!
                </h5>

                <SoDoGhe dataGhe={this.dataGhe} />

                <div className="screenBox w-100 h-50 py-3 my-4">
                  SCREEN THIS WAY
                </div>
                <button className="btn btn-light w-25">
                  Confirm Selection
                </button>
              </div>
            </div>

            <table className="table confirmTable mt-4 bg-light text-center">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Number of Seats</td>
                  <td>Seats</td>
                </tr>
                <tr>
                  <td id="nameConfirm"></td>
                  <td id="numbConfirm"></td>
                  <td id="seatConfirm"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className="text-center pt-3">
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          W3layouts
        </footer>
      </div>
    );
  }
}
