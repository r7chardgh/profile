import React from "react";
import { ReactComponent as Icon1 } from "../assets/images/skills-icons/skill-icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/images/skills-icons/skill-icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/images/skills-icons/skill-icon-3.svg";
import { ReactComponent as Icon4 } from "../assets/images/skills-icons/skill-icon-4.svg";
import { ReactComponent as Icon5 } from "../assets/images/skills-icons/skill-icon-5.svg";
import { ReactComponent as Icon6 } from "../assets/images/skills-icons/skill-icon-6.svg";
import { ReactComponent as IconDefault } from "../assets/images/skills-icons/skill-icon-outline.svg";
import { ReactComponent as IconEmail } from "../assets/images/social-media/email-icon.svg";
import { ReactComponent as IconGitHub } from "../assets/images/social-media/github-icon.svg";
import { ReactComponent as IconLinkedIn } from "../assets/images/social-media/linkedin-icon.svg";
import { ReactComponent as IconMyBlog } from "../assets/images/social-media/myblog-icon.svg";
import { ReactComponent as IconHyperlink } from "../assets/images/social-media/hyperlink-icon.svg";
import { ReactComponent as IconClipboard } from "../assets/images/social-media/clipboard-icon.svg";
import { ReactComponent as IconNext } from "../assets/images/slide/next.svg";
import { ReactComponent as IconPrevious } from "../assets/images/slide/previous.svg";
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
    case 6:
      return <Icon6 {...props} />;
    case "email":
      return <IconEmail {...props} />;
    case "github":
      return <IconGitHub {...props} />;
    case "linkedin":
      return <IconLinkedIn {...props} />;
    case "myblog":
      return <IconMyBlog {...props} />;
    case "hyperlink":
      return <IconHyperlink {...props} />;
    case "clipboard":
      return <IconClipboard {...props} />;
    case "next":
      return <IconNext {...props} />;
    case "previous":
      return <IconPrevious {...props} />;

    default:
      return <IconDefault {...props} />;
      break;
  }
}

export default Icon;
