import { Home } from "../../assets/Home";
import { Goals } from "../../assets/Goals";
import { Message } from "../../assets/Message";
import { Notifications } from "../../assets/Notifications";
import { Projects } from "../../assets/Projects";
import { Progress } from "../../assets/Progress";
import { Settings } from "../../assets/Settings";

export const listItem = [
  {
    name: "Home",
    route: "/",
    icon: Home,
  },
  {
    name: "Message",
    route: "/messages",
    icon: Message,
  },
  {
    name: "Projects",
    nested: true,
    icon: Projects,
    route: [
      {
        name: "Project 1",
        route: [{
          name: "Sub Project 1",
          route: "/subProject"
        },
               {
          name: "Sub Project 2",
          route: "/subProject2"
        }],
      },
      {
        name: "Project 2",
        route: "/project-2",
      },
    ],
  },
  {
    name: "Progress",
    route: "/progress",
    icon: Progress,
  },
  {
    name: "Goals",
    route: "/goals",
    icon: Goals,
  },
];

export const listItemfooter = [
  {
    name: "Notifications",
    route: "/notifications",
    icon: Notifications,
  },
  {
    name: "Settings",
    route: "/settings",
    icon: Settings,
  },
];
