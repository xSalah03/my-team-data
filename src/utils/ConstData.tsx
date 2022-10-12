import { SliderList } from "../interface/Utils";
import {
  faBuildingColumns,
  faCalendarDays,
  faHeadSideCough,
  faPersonRunning,
  faRankingStar,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export const items: SliderList[] = [
  {
    key: 1,
    href: "equipes",
    icon: faUsers,
    label: "EQUIPES",
  },
  {
    key: 2,
    href: "joueurs",
    icon: faPersonRunning,
    label: "JOUEURS",
  },
  {
    key: 3,
    href: "matchs",
    icon: faTrophy,
    label: "MATCHS",
  },
  {
    key: 4,
    href: "statistiques",
    icon: faRankingStar,
    label: "STATISTIQUES",
  },
  {
    key: 5,
    href: "competition",
    icon: faTrophy,
    label: "COMPETITION",
  },
  {
    key: 6,
    href: "stade",
    icon: faBuildingColumns,
    label: "STADE",
  },
  {
    key: 7,
    href: "arbitre",
    icon: faHeadSideCough,
    label: "ARBITRE",
  },
  {
    key: 8,
    href: "saison",
    icon: faCalendarDays,
    label: "SAISON SPORTIF",
  },
];
