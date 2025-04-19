import Image from "next/image";

// import './components/about/about.css'
import Header from "../components/header/header";
import Age from "../components/age/age";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Sites from "../components/sites/sites";

export default function Home() {
  return (
    <>
      <Hero />
      <Header />
      <br />
      <br />
      {/* ABOUT Section */}
      <div id="about" className="about container section">
        <div className="imgage_content">
          <h2 className="abut__title">Qatar</h2>

          <p className="about__description">
            <strong>
              Qatar’s location in relation to the Arabian Peninsula
            </strong>{" "}
            The Qatar Peninsula is located in the middle of the western coast of
            the Arabian Gulf, thus being the link between the north and south of
            the Arabian Peninsula from the earliest cultural times until the
            present day.
          </p>
          <p className="about__description">
            <strong>Diameter area</strong> The total diameter of the area is
            about 11,000 square kilometers, extending in the waters of the
            Arabian Gulf from east to west.
          </p>
          <p className="about__description">
            <strong>Topography of Qatar</strong> Qatar’s surface is
            characterized by rocky highlands in the north and sandy desert in
            the south. This is due to the drought that struck the Arabian
            Peninsula region during ancient times. Most of Qatar’s surface was
            transformed into land devoid of wild plants and animals.
          </p>
          <p className="about__description">
          <strong>Qatar climate</strong>  Qatar's current climate is characterized by hot, humid summers, mild
            winters, and little rain. • During the period (1765-1937), the
            archaeological city of Al Zubarah emerged in Qatar, which during its
            commercial phases dominated trade lines in general and the pearl
            trade.
          </p>
        </div>
        <div className="about__img-wrapper">
          <iframe
            className="frame"
            src="https://www.youtube.com/embed/xVE37tNyvGA?si=Y2GXlInmidMVsdr_"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            // @ts-ignore
            allowFullScreen=""
          />
        </div>
      </div>
      {/* ABOUT Section */}

      <Age />
      <Sites />
      <Footer />
    </>
  );
}
