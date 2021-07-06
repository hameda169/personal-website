import { ProjectType } from "./types";

export default {
  about:
    "I'm Hamed Aghabalazadeh.<br/>" +
    "I've graduated at bachlor degree at Isfahan University of technology.<br/>" +
    'Currently I\'m a web developer at <a href="https://zardalu.dev">Zardalu</a> since January 2020.',
  skills: [
    { name: "Javascript", score: 100 },
    { name: "Typescript", score: 100 },
    { name: "React", score: 100 },
    { name: "Git", score: 100 },
    { name: "HTML", score: 75 },
    { name: "CSS", score: 75 },
    { name: "Algorithm", score: 75 },
    { name: "React Native", score: 75 },
    { name: "Python", score: 75 },
    { name: "Flask", score: 75 },
    { name: "Telegram bot", score: 50 },
    { name: "Android", score: 25 },
    { name: "Java", score: 25 },
  ],
  projects: [
    {
      name: "Set card game",
      demo: { name: "Demo", link: "https://set.hameda169.ir" },
      source: [
        { name: "Frontend Source", link: "https://github.com/hameda169/set-game-frontend" },
        { name: "Backend Source", link: "https://github.com/hameda169/setGameBACKEND" },
      ],
    },
    { name: "DNS Server over https", source: { name: "Source", link: "https://github.com/hameda169/dns_server" } },
    {
      name: "Analog clock with SVG",
      demo: { name: "Demo", link: "https://clock.hameda169.ir" },
      source: { name: "Source", link: "https://github.com/hameda169/clock" },
    },
    {
      name: "Github profile viewer",
      demo: { name: "Demo", link: "https://raychat.hameda169.ir" },
      source: { name: "Source", link: "https://github.com/hameda169/raychat" },
    },
  ] as Array<ProjectType>,
  contacts: [
    { name: "Email", value: "169Hamed [AT] gmail.com" },
    { name: "Phone", value: "+989146897670" },
    { name: "Address", value: "Tehran - Sa'adat Abad - Gheysari - 78" },
  ],
  socialMediaAccounts: [
    { name: "Telegram", link: "https://t.me/hameda169" },
    { name: "LinkedIn", link: "https://linkedin.com/in/hameda169" },
    { name: "Twitter", link: "https://twitter.com/hameda169" },
    { name: "Instagram", link: "https://instagram.com/hameda169" },
    { name: "Stackoverflow", link: "https://stackoverflow.com/users/7235511/hameda169" },
  ],
};
