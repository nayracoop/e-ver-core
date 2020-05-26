import moment from "moment";
let date = moment();

export const talks = [
  {
    id: 1,
    title: "Charla matutina",
    details:
      "Excepteur sint occaecat cupidatat, dolore eu fugiat nulla pariatur non proident. Dolorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et fugiat nulla pariatur dolore magna aliqua. Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    summary: "Elit esse cillum dolore eu fugiat nulla pariatur.",
    begin: date.format(),
    duration: 120,
    video: {
      URI: "https://www.youtube.com/watch?v=j8NTPQR0lc8",
      comments: "Hola este es un comentario que tiene que ver con el video",
      autoplay: false,
      type: "live",
    },
    speaker: {
      name: "Tulia Caradhro",
      bio:
        "Nam tempor utamur gubergren no. Pri quas audiam virtute ut, case utamur fuisset eam ut, dolor in reprehenderit iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Intellegam fugiat nulla pariatur id usu, vide oporteat vix eu, id illud principes has.",
      company: "Second Life",
      avatar: "avatar.png",
    },
    allowsComments: true,
  },
  {
    id: 2,
    title: "Café, té y medialunas",
    details:
      "Excepteur sint occaecat cupidatat, dolore eu fugiat nulla pariatur non proident. Dolorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et fugiat nulla pariatur dolore magna aliqua. Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    summary:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    begin: date.clone().add(4, "hour").format(),
    duration: 60,
    video: {
      URI: "https://www.youtube.com/watch?v=-smN6ZUHzgk",
      comments: "Hola este es un comentario que tiene que ver con el video",
      autoplay: false,
      type: "recording",
    },
    speaker: {
      name: "Paco Amd Plus",
      bio:
        "Nam tempor utamur gubergren no. Pri quas audiam virtute ut, case utamur fuisset eam ut, dolor in reprehenderit iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Intellegam fugiat nulla pariatur id usu, vide oporteat vix eu, id illud principes has.",
      company: "Third Life",
      avatar: "avatar.png",
    },
    allowsComments: true,
  },
];
