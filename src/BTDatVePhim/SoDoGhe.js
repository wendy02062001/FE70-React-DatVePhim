import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class SoDoGhe extends Component {
  handleOnClick = (event, seat) => {
    let button = event.target;
    let btnColor = button.style.backgroundColor;
    console.log(btnColor);
    if (btnColor === "white") {
      button.style.backgroundColor = "green";
      this.props.addSeat(seat);
    } else if (btnColor === "green") {
      button.style.backgroundColor = "white";
      this.props.removeSeat(seat.soGhe);
    } else {
      return;
    }
  };

  renderBox = (index) => {
    let { dataGhe } = this.props;
    return dataGhe[index].danhSachGhe.map((ghe, idx) => {
      if (index === 0) {
        if (idx === 5) {
          return (
            <Fragment>
              <td key={idx} className="text-white">
                {ghe.soGhe}
              </td>
              <td></td>
            </Fragment>
          );
        }
        return (
          <td key={idx} className="text-white">
            {ghe.soGhe}
          </td>
        );
      } else {
        if (idx === 5) {
          return (
            <Fragment>
              <td key={idx}>
                <button
                  className="btn"
                  style={{
                    backgroundColor: ghe.daDat ? "red" : "white",
                    width: "25px",
                    height: "25px",
                    outline: "none",
                  }}
                  onClick={(event) => {
                    this.handleOnClick(event, ghe);
                  }}
                ></button>
              </td>
              <td></td>
            </Fragment>
          );
        }
        return (
          <td key={idx}>
            <button
              className="btn"
              style={{
                backgroundColor: ghe.daDat ? "red" : "white",
                width: "25px",
                height: "25px",
                outline: "none",
              }}
              onClick={(event) => {
                this.handleOnClick(event, ghe);
              }}
            ></button>
          </td>
        );
      }
    });
  };

  renderGhePhim = () => {
    let { dataGhe } = this.props;
    return dataGhe.map((ghe, idx) => {
      if (idx !== 5) {
        return (
          <tr key={idx}>
            <td className="text-white">{ghe.hang}</td>
            {this.renderBox(idx)}
          </tr>
        );
      } else {
        return (
          <Fragment>
            <tr key={idx}>
              <td className="text-white">{ghe.hang}</td>
              {this.renderBox(idx)}
            </tr>
            <tr key={-1}>
              <td></td>
            </tr>
          </Fragment>
        );
      }
    });
  };

  render() {
    return (
      <Fragment>
        <table
          className="table seatTable w-50 mx-auto"
          border="0"
          cellPadding="0"
          cellSpacing="0"
        >
          <tbody>{this.renderGhePhim()}</tbody>
        </table>

        <div
          className="text-white w-100 h-50 py-3 my-4"
          style={{ fontSize: "25px", backgroundColor: "peru" }}
        >
          SCREEN THIS WAY
        </div>

        <button
          className="btn btn-success w-50 p-3 font-weight-bold"
          onClick={() => {
            this.props.confirmSelection();
          }}
        >
          Confirm Selection
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    arrSelectedSeat: rootReducer.datVePhimReducer.arrSelectedSeat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSeat: (ghe) => {
      const action = {
        type: "ADD_SEAT",
        ghe,
      };
      dispatch(action);
    },

    removeSeat: (maGhe) => {
      const action = {
        type: "REMOVE_SEAT",
        maGhe,
      };
      dispatch(action);
    },

    confirmSelection: () => {
      const action = {
        type: "CONFIRM_SELECTION",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SoDoGhe);
