import React from "react";
import { Hero } from "../sections";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CtaProps = {
  img: string;
  title: string;
  description: JSX.Element;
};

export type HeroProps = {
  image: ImageProps;
  title: string;
  description: string;
  ctaText: CtaProps[];
};

const heroProps: HeroProps = {
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  ctaText: [
    {
      img: "https://img.icons8.com/badges/48/blueprint.png",
      title: "Brief",
      description: (
        <>
          Complete <b>brief writing or simple guidance</b> on what to include,
          we&apos;ve got you covered.
        </>
      ),
    },
    {
      img: "https://img.icons8.com/dotty/80/view-file.png",
      title: "Search",
      description: (
        <>
          In-depth agency search covering; <b>criteria matching</b>, door
          knocking and due-diligence vetting.
        </>
      ),
    },
    {
      img: "https://img.icons8.com/dotty/80/meeting-room.png",
      title: "Pitch",
      description: (
        <>
          Comprehensive <b>pitch management</b>, including comms, diary
          management and pitch hosting.
        </>
      ),
    },
  ],
};

const Home: React.FC = () => {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
      </div>
    </>
  );
};

export default Home;
