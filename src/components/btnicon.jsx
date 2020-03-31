import React, { Component } from "react";
import { ReactComponent as Profile } from "../icon/profile-icon.svg";
import { ReactComponent as Skill } from "../icon/skill-icon.svg";
import { ReactComponent as Experience } from "../icon/exp-icon.svg";
import { ReactComponent as Work } from "../icon/work-icon.svg";
import { ReactComponent as Contact } from "../icon/contact-icon.svg";
class BtnIcon extends Component {
  render() {
    const { id } = this.props.option;
    switch (id) {
      case 1:
        return <Profile />;
      case 2:
        return <Skill />;
      case 3:
        return <Experience />;
      case 4:
        return <Work />;
      case 5:
        return <Contact />;
      default:
        return <span>null</span>;
    }
  }
}

export default BtnIcon;
