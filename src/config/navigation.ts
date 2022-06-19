import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-common-types";

type NavType = {
  key: number;
  href: string;
  icon: IconDefinition;
  title: string;
  desc: string;
};

export const navigation: Array<NavType> = [
  {
    key: 1,
    href: "/home",
    icon: solid("home"),
    title: "Home",
    desc: "This is the home desc",
  },
  {
    key: 2,
    href: "/profile",
    icon: solid("person"),
    title: "Profile",
    desc: "This is the profile desc",
  },
  {
    key: 3,
    href: "/analytics",
    icon: solid("table"),
    title: "Analytics",
    desc: "This is the analytics desc",
  },
];
