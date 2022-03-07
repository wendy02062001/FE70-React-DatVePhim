import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

class ThongTinMuaVe extends Component {
  renderTotalAmt = () => {
    let totalAmt = this.props.datVePhim.arrBookedSeat.reduce(
      (amt, seat, index) => {
        return (amt += seat.gia);
      },
      0
    );

    totalAmt += this.props.datVePhim.arrSelectedSeat.reduce(
      (amt, seat, index) => {
        return (amt += seat.gia);
      },
      0
    );

    return `${totalAmt}`;
  };

  render() {
    let { numSeat, arrSelectedSeat, arrBookedSeat } = this.props.datVePhim;
    arrBookedSeat = _.sortBy(arrBookedSeat, ["soGhe"]);
    return (
      <div className="col-lg-3 col-md-12 col-sm-12 col-3">
        <div
          className="card"
          style={{
            borderRadius: "8px",
            backgroundColor: "whitesmoke",
            border: "none",
          }}
        >
          <div className="card-header bg-secondary text-white text-center">
            <h3>Your seats here!</h3>
          </div>
          <div className="card-body">
            <p
              className="font-weight-bold text-danger"
              style={{ fontSize: "22px" }}
            >
              Number of Seats: <span>{numSeat}</span>
            </p>
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Seat</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {arrBookedSeat.map((seat, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{seat.soGhe}</td>
                      <td>{seat.gia}</td>
                      <td>
                        {seat.daDat ? (
                          <p className="alert-danger">Booked</p>
                        ) : (
                          <p className="text-success">Selecting</p>
                        )}
                      </td>
                    </tr>
                  );
                })}

                {arrSelectedSeat.map((seat, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{seat.soGhe}</td>
                      <td>{seat.gia}</td>
                      <td>
                        {seat.daDat ? (
                          <p className="alert-danger">Booked</p>
                        ) : (
                          <p className="text-success">Selecting</p>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <p
              className="alert-success font-weight-bold p-3"
              style={{ fontSize: "22px" }}
            >
              TOTAL PRICE : {this.renderTotalAmt()}
            </p>
          </div>
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
