import React, { Component } from "react";
import { ReactComponent as Profile } from "../icon/user-circle-regular.svg";
import { ReactComponent as Skill } from "../icon/laptop-code-solid.svg";
class BtnIcon extends Component {
  render() {
    const { id } = this.props.option;
    switch (id) {
      case 1:
        return <Profile />;
      case 2:
        return <Skill />;
      default:
        return <div>No Icon</div>;
    }
  }
}

export default BtnIcon;
