import React, { Component, Fragment } from "react";
import SoDoGhe from "./SoDoGhe";
import style from "./style.module.css";
import ThongTinMuaVe from "./ThongTinMuaVe";

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
      <div
        className={`${style.commonStyle}`}
        style={{
          background: "url(./img/banner.jpg) no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <h1 className="text-center py-4 text-white">MOVIE SEAT SELECTION</h1>
          <div className="row">
            <div className="col-8">
              <div className={`${style.formContainer}`}>
                {/* <h5 className="text-danger mb-4">
                  Fill The Required Detail Below And Select Your Seats
                </h5>
                <div className="form">
                  <label className="text-white my-3">
                    Name <span style={{ color: "red" }}>*</span>:
                  </label>
                  <input className="form-control" required></input>
                </div> */}

                <div className="row my-3 text-white">
                  <div className="col-4">
                    <span style={{ color: "green" }}>
                      <i className="fas fa-square mr-2"></i>
                    </span>
                    Selected Seat
                  </div>
                  <div className=" col-4">
                    <span style={{ color: "red" }}>
                      <i className="fas fa-square mr-2"></i>
                    </span>
                    Reserved Seat
                  </div>
                  <div className=" col-4">
                    <span style={{ color: "white" }}>
                      <i className="fas fa-square mr-2"></i>
                    </span>
                    Empty Seat
                  </div>
                </div>

                <div className={style.seatSelection}>
                  <div className="text-center">
                    <h5 className="alert-danger py-2 my-3">
                      Please Select Your Seat NOW!
                    </h5>

                    <SoDoGhe dataGhe={this.dataGhe} />

                    <div
                      className="text-white w-100 h-50 py-3 my-4"
                      style={{ fontSize: "25px", backgroundColor: "peru" }}
                    >
                      SCREEN THIS WAY
                    </div>

                    <button className="btn btn-success w-50 p-3 font-weight-bold">
                      Confirm Selection
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <ThongTinMuaVe />
          </div>
        </div>
      </div>
    );
  }
}
