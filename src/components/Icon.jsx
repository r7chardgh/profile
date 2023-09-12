import React from "react";
import { ReactComponent as Icon1 } from "../assets/images/skills-icons/skill-icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/images/skills-icons/skill-icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/images/skills-icons/skill-icon-3.svg";
import { ReactComponent as Icon4 } from "../assets/images/skills-icons/skill-icon-4.svg";
import { ReactComponent as Icon5 } from "../assets/images/skills-icons/skill-icon-5.svg";
import { ReactComponent as IconDefault } from "../assets/images/skills-icons/skill-icon-outline.svg";
function Icon({ id }) {
  switch (id) {
    case 1:
      return <Icon1 />;
    case 2:
      return <Icon2 />;
    case 3:
      return <Icon3 />;
    case 4:
      return <Icon4 />;
    case 5:
      return <Icon5 />;

    default:
      return <IconDefault />;
      break;
  }
}

export default Icon;
