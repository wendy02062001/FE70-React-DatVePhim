import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class SoDoGhe extends Component {
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
                    backgroundColor: "white",
                    width: "25px",
                    height: "25px",
                  }}
                  onClick={() => {
                    this.props.addSeat(ghe);
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
                backgroundColor: "white",
                width: "25px",
                height: "25px",
              }}
              onClick={() => {
                this.props.addSeat(ghe);
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SoDoGhe);
