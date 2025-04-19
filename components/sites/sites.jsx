import React from 'react';
import './sites.css'
import Link from 'next/link';

const Sites = () => {
  return (
    <>
  {/* SITES Section Start*/}
  <section id="sites">
    <h2 className="archaeoligical">ARCHAEOLOGICAL SITES</h2>{" "}
    {/*in feature.css line 16 */}
    <section className=" card--container container section">
      {/* Al-Zubara SITE 1 start*/}
    
        <div className="container section profile-card">
          <div className="profile-content">
            <div className="profile-picture">
              <img
                src="https://res.cloudinary.com/dmklduciw/image/upload/v1719299358/%D8%B5%D9%88%D8%B1%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9/Large_Palatial_Compound1_if4kfd.jpg"
                alt=""
              />
            </div>
            <Link href='/zubarah'>
              <h2 className="profile-name">Al-Zubara</h2>
            </Link>
            <p className="profile-description">Ruins of Al Zubarah city</p>
            <ul className="navigation">
              <li>
            
              </li>
            </ul>
          </div>
        </div>
    
      {/* Al-Zubara SITE 1 End*/}
      {/* Freaha SITE 2 start*/}
      <div id="zubara-site" className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241307/WebSite%20Images/Sites/grid_landscape_vvsxtl.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Freaha</h2>
          <p className="profile-description">Freaha City</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Freaha SITE 2 end*/}
      {/* Ajassasia SITE 3 start*/}
      <div className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1719299357/%D8%B5%D9%88%D8%B1%20%D9%84%D9%84%D9%85%D9%88%D9%82%D8%B9/Jabal_Al_Jassasiya5_d3dgsl.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Ajassasia</h2>
          <p className="profile-description">Aljassasia Rock Carving</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Ajassasia SITE 3 end*/}
      {/* Ain Mohamad SITE 4 start*/}
      <div className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241357/WebSite%20Images/Sites/grid_large_preview_hpmvhe.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Ain Mohamad</h2>
          <p className="profile-description">Ain Mohamad village</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Ain Mohamad SITE 4 end*/}
      {/* Almfjer SITE 5 start*/}
      <div className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1686040922/WebSite%20Images/Sites/Al_Mafjar-3_cujxmz.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Almfjer</h2>
          <p className="profile-description">Almfjer village</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Almfjer SITE 5 end*/}
      {/* Zkreet SITE 6 start*/}
      <div className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689179294/works/WhatsApp_Image_2023-07-12_at_6.13.48_PM_bitfcn.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Zkreet</h2>
          <p className="profile-description">Zkreet Fort</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Zkreet SITE 6 end*/}
      {/* Lujmail SITE 7 start*/}
      <div className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1700755438/WebSite%20Images/Near%20Zubara/Lejmail_ra7pbl.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Lujmail</h2>
          <p className="profile-description">Lujmail village</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Lujmail SITE 7 end*/}
      {/* Umm Almma'a SITE 8 start*/}
      <div className="container section profile-card">
        <div className="profile-content">
          <div className="profile-picture">
            <img
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1715078757/WebSite%20Images/excavation/excavation4_zltj5n.jpg"
              alt=""
            />
          </div>
          <h2 className="profile-name">Umm Almma'a</h2>
          <p className="profile-description">Umm Almma'a</p>
          <ul className="navigation">
            <li>
              <a
                target="_blank"
                href="./archaeology/src/pages/zubara/zubara.html"
              >
                <i className="fa-solid fa-images" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
  {/* Umm Almma'a SITE 8 start*/}
  {/* SITES Section End */}
</>

  );
}

export default Sites;
