import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import profilePic from "../../../public/imgs/profile.jpeg";
import playIntro from "../../../public/icons/play_intro.svg";
// import IntroVideo from "../../../public/intros/intro-main.mp4"
import IntroVideo from "../../../public/intros/nihongo-intro.mp4"

const Hero = () => {
  const { t } = useTranslation();
  let cvUrl = t("download_cv_url"); //Dynamic CV File depending on Selected Language

  const [introPopUp, setIntroPopUp] = useState(false)

  const enableOpenIntroVideo = () => {
    console.log("Opening Video");
    setIntroPopUp(!introPopUp)
    
  }

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>{t("welcome")}!</h1>
          <h3>Yolanda Maria Mambo</h3>
          <h4>
            {t("me")} <span className="">
              Consultora Primavera e SAP B1
              </span>
          </h4>
          <p>
            Profissional altamente qualificada com mais de 15 anos de experiência, incluindo 12 anos em multinacionais nos sectores de mineração, soluções digitais e programas.
          </p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/yolanda-maria-7904422b/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href={cvUrl} target="_blank" className="btn">
            {t("download_cv")}
          </a>
        </div>
        <div className="profile">
          <img src={profilePic} alt="João Devson Mucavel" />
        </div>
      </section>
      {introPopUp ?
      <div className="intro-video-player">
        <div className="close-intro">
          <button onClick={enableOpenIntroVideo}>X</button>
        </div>
        <video controls autoPlay>
          <source
            src={IntroVideo}
          />
          Your browser does not support the video tag.
        </video>
      </div>
          : ""}
    </>
  );
};

export default Hero;
