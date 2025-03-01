const packages = [
  {
    id: "123",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    title: "Package 1",
    description: "Description 1",
    destination: "Destination 1",
    category: ["Category 1", "Category 2"],
    moreInfo: [
      {
        title: "More Info 1",
        description: "Description 1",
      },
      {
        title: "More Info 2",
        description: "Description 2",
      },
    ],
  },
];

export type Tpackage = {
  id: string;
  images: string[];
  title: string;
  description: string;
  destination: string;
  category: string[];
  moreInfo: object[];
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
