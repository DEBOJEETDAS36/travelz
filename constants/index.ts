const packages = [
  {
    name: "Darjeeling",
    url: "https://react.dev/",
  },
  {
    name: "Manali",
    url: "https://nextjs.org/",
  },
];

export type Tpackage = {
  name: string;
  url: string;
};

const navLinks = [
  {
    name: "Packages",
    url: "#packages",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Review",
    url: "#review",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const heroDescription =
  "Ready to go beyond the ordinary? At Orgoto, every destination becomes a canvas, waiting to be painted with your unique experiences.";

export const packagesHeading = "Choose from a wide range of packages";
export { packages, navLinks };
