import React from "react";
import { useTranslation } from "react-i18next";

const footer = () => {
  const { t } = useTranslation();
 const year = new Date().getFullYear();

  return (
    <>
      {/* FOOTER SECTION */}
      <footer>
        <div className="footer" id="contacts">
          <article className="shorbio">
            <h5>Quem sou</h5>
            <p>Consultora Primavera e SAP.</p>
            <p>
              Excelentes habilidades de comunicação, análise, e domínio de softwares como Primavera, SAP, e Sage. Experiência em gestão de projetos internacionais e profundo conhecimento da legislação em Angola, Moçambique, e Portugal.
            </p>
          </article>
          <article className="main-contacts">
            <h5>Meus Contactos</h5>
            <p>
              Cel. <a href="tel:+258 84 606 7614">(+258) 84 606 7614</a>
            </p>
            {/* <p>
              Tel. <a href="tel:+258 82 275 9237">(+258) 84 455 9091</a>
            </p>
            <p>
              Work. <a href="tel:+258 86 855 9091">(+258) 84 455 9091</a>
            </p> */}
            <p>
              E-mail: &nbsp;
              <a href="mailto:yolandamambo@gmail.com">yolandamambo@gmail.com</a>
            </p>

          </article>
          {/* <article className="docs">
            <h5>Documentos</h5>
            <p>
              Abaixo disponibilizo os Links para baixar os meus Documentos e
              Certificações.
            </p>
            <p>
              <a target="_blank" href="../../public/files/diploma.jfif">Diploma</a>
            </p>
            <p>
              <a target="_blank" href="../../public/files/certidao-profissional.pdf">
              Certificado Profissional
              </a>
            </p>
          </article> */}
          <article className="footer-social-media">
            <h5>Redes Sociais</h5>

            <p>
              LinkedIn: &nbsp;
              <a
                href="https://www.linkedin.com/in/yolanda-maria-7904422b/"
                target="_blank"
              >
                https://www.linkedin.com/in/yolanda-maria-7904422b/
              </a>
            </p>


          </article>
        </div>
        <div className="copyrights">
          <p>
            Todos Direitos Reservados &copy; <span id="ano">{year}</span> -
            <a href="http://software.keomagroup.com/" target="_blank">
              Keoma Software, Inc
            </a>
          </p>
          <p>Coded with &hearts; by <a href="http://joaodevsonmucavel.vercel.app/" target="_blank">D3v4$$3</a></p>
        </div>
      </footer>
      {/* FOOTER SECTION */}
    </>
  );
};

export default footer;
