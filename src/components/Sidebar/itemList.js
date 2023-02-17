export const listItem = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Message",
    route: "/messages",
  },
  {
    name: "Projects",
    nested: true,
    route: [
      {
        name: "Project 1",
        route: "/project-1",
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
  },
  {
    name: "Goals",
    route: "/goals",
  },
];
