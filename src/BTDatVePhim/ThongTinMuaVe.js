import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinMuaVe extends Component {
  renderTotalAmt = () => {
    let totalAmt = this.props.datVePhim.arrSelectedSeat.reduce(
      (amt, seat, index) => {
        return (amt += seat.gia);
      },
      0
    );

    return `${totalAmt}`;
  };

  render() {
    let { cusName, numSeat, arrSelectedSeat } = this.props.datVePhim;
    return (
      <div className="col-3">
        <div
          className="p-3"
          style={{ borderRadius: "8px", backgroundColor: "whitesmoke" }}
        >
          <p
            className="text-danger font-weight-bold"
            style={{ fontSize: "22px" }}
          >
            Number of Seats: <span>{numSeat}</span>
          </p>
          <table className="table text-center">
            <thead>
              <tr>
                <th>Seat</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {arrSelectedSeat.map((seat, idx) => {
                return (
                  <tr key={idx}>
                    <td>{seat.soGhe}</td>
                    <td>{seat.gia}</td>
                    <td>
                      <button className="btn btn-danger">Cancel</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p
            className="alert-success font-weight-bold p-3"
            style={{ fontSize: "22px" }}
          >
            TOTAL PRICE : {this.renderTotalAmt()}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    datVePhim: rootReducer.datVePhimReducer,
  };
};

export default connect(mapStateToProps)(ThongTinMuaVe);
