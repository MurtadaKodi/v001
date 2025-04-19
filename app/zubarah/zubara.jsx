import Link from "next/link";
import SliderHome from "../zubarah/components/ui/SliderHome";
import "../zubarah/all-sites.css";
const Zubara = () => {
  return (
    <div className="main">
      <div className="main-site">
        <div className="site-l">
          <h1>Al Zubarah</h1>
          <div className="site-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni
              debitis perferendis nesciunt deleniti sit harum ex, expedita
              obcaecati, eaque qui porro omnis asperiores, cumque totam error
              non accusantium hic quas iste voluptas. Aperiam fugiat magnam
              minima ea maxime velit ipsa harum, nisi delectus maiores deleniti
              aut consectetur accusantium molestias, dolor dolore nulla
              cupiditate eum modi impedit. Voluptatibus, perferendis optio
              similique repudiandae labore eos aliquam excepturi ad debitis
              dolores libero laudantium itaque sunt vero eligendi accusantium ea
              impedit necessitatibus earum vel distinctio praesentium eius sint.
              Reprehenderit ut saepe obcaecati tempora, quos soluta voluptas
              distinctio perspiciatis natus harum, adipisci ad nostrum pariatur.
              Possimus dolorum commodi, aperiam quidem repudiandae fugiat ipsam
              temporibus aliquid corporis quibusdam? Est cumque, eos nam
              voluptatibus qui facere non laboriosam fuga perferendis odit culpa
              consequatur nostrum eius reprehenderit, amet deserunt nesciunt
              deleniti saepe placeat error! Iste placeat quasi, esse dolores
              sequi voluptatum repudiandae provident accusamus inventore
              repellendus minima doloremque fugit. Deleniti repudiandae tempora
              deserunt animi dolores, culpa quaerat quod maiores suscipit,
              delectus expedita magni at fugit. Ratione error veritatis sunt
              fuga. Ipsam tempora beatae, repellendus voluptatum magni eveniet,
              dolore sequi dignissimos distinctio nam qui molestiae accusamus
              temporibus itaque voluptate, ratione esse consequuntur sapiente
              pariatur rerum consequatur ipsa omnis!
            </p>
          </div>
        </div>

        <div className="site-r">
          <div className="site-r-t">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10175.105231147647!2d51.03349057737562!3d25.980022480437313!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1744559128612!5m2!1sar!2sqa"
              width="100%"
              height="250"
            ></iframe>
          </div>
          <div className="site-r-b">
            {/* <SliderHome /> */}

            <div className="auto-slider"></div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="overlay-container">
          <img
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319693/WebSite%20Images/Alzubara%20image/56251_1_rltji6.jpg"
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <div className="text">
              <h4>Southern House</h4>
              <p>
                xxxxxxxxxxxxxxxxxxx 
                <br />
                xxxxxxxxxxxxxxxxxxx 
                <br />
                xxxxxxxxxxxxxxxxxxx 
                <br />
                xxxxxxxxxxxxxxxxxxx 
                <br />

              </p>
            </div>
          </div>
        </div>

        <div className="overlay-container">
          <img
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1719299355/%D8%B5%D9%88%D8%B1%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9/Industrial_Area3_ex2ya6.jpg"
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <div className="text">
              <h4>Industrial Area</h4>
              <p>
                This area seems to have remained a focus of activity since the
                founding of the site and is one of Al Zubarah’s most complex
                archaeological areas, with many layers of occupation,
                abandonment and reoccupation overlaying one another. Every
                historical phase of the site is represented in this one area.
              </p>
            </div>
          </div>
        </div>

        <div className="overlay-container">
          <img
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1719299365/%D8%B5%D9%88%D8%B1%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9/Large_Palatial_Compound3_if7yf7.jpg"
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <div className="text">
              <h4>Large Palatial Compound</h4>
              <p>
                Domestic unit/complex Late Ottoman c.1800 - c.1916 CE
                <br />
                Large scale building located in the southwestern part of the
                town. It was built during the town’s heyday in the late 18th and
                early 19th century. The compound follows the same form as the
                domestic architecture elsewhere in Al Zubarah, but on a much
                larger scale.
              </p>
            </div>
          </div>
        </div>

        <div className="overlay-container">
          <img
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319694/WebSite%20Images/Alzubara%20image/44879_mpzfnr.jpg"
            alt="Avatar"
            className="image"
          />
          <div className="overlay">
            <div className="text">
              <h4>Northern House</h4>
              <p>
                A large courtyard house Domestic unit/complex - Late Ottoman
                (c.1800 - c.1916 CE)) In the northeastern part of the town is
                located a large courtyard house, so-called Northern House (البيت
                الشمالي "al-bait al-shimali") The house is preserved in two
                different phases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zubara;
