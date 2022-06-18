import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-common-types";

export const sideNavIcons: { [key: string]: IconDefinition } = {
  arrowRight: solid("arrow-right"),
  arrowLeft: solid("arrow-left"),
};

export const navigation = [
  {
    key: 1,
    href: "/home",
    icon: solid("home"),
    title: "Home",
    desc: 'This is the home desc'
  },
  {
    kay: 2,
    href: "/profile",
    icon: solid("person"),
    title: "Profile",
    desc: 'This is the profile desc'
  },
  {
    href: "/analytics",
    icon: solid("table"),
    title: "Analytics",
    desc: 'This is the analytics desc'
  },
  //   {
  //     href: "/home",
  //     icon: "home",
  //   },
];
