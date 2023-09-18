import React from "react";
import { ReactComponent as Icon1 } from "../assets/images/skills-icons/skill-icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/images/skills-icons/skill-icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/images/skills-icons/skill-icon-3.svg";
import { ReactComponent as Icon4 } from "../assets/images/skills-icons/skill-icon-4.svg";
import { ReactComponent as Icon5 } from "../assets/images/skills-icons/skill-icon-5.svg";
import { ReactComponent as IconDefault } from "../assets/images/skills-icons/skill-icon-outline.svg";
import { ReactComponent as IconEmail } from "../assets/images/social-media/email-icon.svg";
import { ReactComponent as IconGitHub } from "../assets/images/social-media/github-icon.svg";
import { ReactComponent as IconLinkedIn } from "../assets/images/social-media/linkedin-icon.svg";
import { ReactComponent as IconMyBlog } from "../assets/images/social-media/myblog-icon.svg";
function Icon({ id, ...props }) {
  switch (id) {
    case 1:
      return <Icon1 {...props} />;
    case 2:
      return <Icon2 {...props} />;
    case 3:
      return <Icon3 {...props} />;
    case 4:
      return <Icon4 {...props} />;
    case 5:
      return <Icon5 {...props} />;
    case "email":
      return <IconEmail {...props} />;
    case "github":
      return <IconGitHub {...props} />;
    case "linkedin":
      return <IconLinkedIn {...props} />;
    case "myblog":
      return <IconMyBlog {...props} />;

    default:
      return <IconDefault {...props} />;
      break;
  }
}

export default Icon;
