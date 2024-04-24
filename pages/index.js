import { Hero } from "../sections";

const heroProps = {
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  title: "Managed agency selection",
  description: "Strenghten your onboarding process",
  ctaText: {
    cta1: {
      img: "https://img.icons8.com/badges/48/blueprint.png",
      title: "Brief",
      description: `Complete brief writing or simple guidance on what to include, we've got you covered.`,
    },
    cta2: {
      img: "https://img.icons8.com/dotty/80/view-file.png",
      title: "Search",
      description:
        "In-depth agency search covering; criteria mathing, door knocking and due-dilligence vetting.",
    },
    cta3: {
      img: "https://img.icons8.com/dotty/80/meeting-room.png",
      title: "Pitch",
      description:
        "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    },
  },
};

export default function Home() {
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
        {/** Other sections */}
      </div>
    </>
  );
}
