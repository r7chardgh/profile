import React, { Component } from "react";
import { ReactComponent as Workout } from "../icon/interest/workout.svg";
import { ReactComponent as Music } from "../icon/interest/music.svg";
import { ReactComponent as Basketball } from "../icon/interest/basketball.svg";
import { ReactComponent as Food } from "../icon/interest/food.svg";
import { ReactComponent as Hiking } from "../icon/interest/hiking.svg";
import { ReactComponent as Gaming } from "../icon/interest/console.svg";

class IntesestIcon extends Component {
  render() {
    const { id } = this.props;
    switch (id) {
      case 1:
        return <Workout />;
      case 2:
        return <Music />;
      case 3:
        return <Basketball />;
      case 4:
        return <Food />;
      case 5:
        return <Hiking />;
      case 6:
        return <Gaming />;
      default:
        return <span>null</span>;
    }
  }
}
export default IntesestIcon;
