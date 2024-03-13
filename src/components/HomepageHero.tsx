// /* Homepage Header */

// position: absolute;
// width: 1440px;
// height: 1433px;
// left: 0px;
// top: 0px;

// background: #FFFFFF;
import Image from "next/image";
import bg from "../../public/markbrownhappyhourcovernotext.png";

export function HomepageHero({}) {
  return (
    <div
      className="homepage-hero-container"
      style={{
        backgroundImage: `url(${bg.src})`,
        minHeight: "100vh",
        width: "100vw",
        height: "200vh",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center ",
      }}
    >
      {/* <Image
        src={`/markbrownhappyhourcovernotext.png`}
        alt="Americana musician Mark Brown at a dump."
        className="homepage-hero"
        fill={true}
      /> */}
    </div>
  );

  /* Homepage Header */
}
