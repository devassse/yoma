const header = () => {

  const changeIcon = () => {
    console.log("Changing Menu Icon");
    
  }
  return (
    <>
      {/* HEADER SECTION */}
      <header className="header">
        <h1>
          <a href="#hero" className="logo">
            Yoma.
          </a>
        </h1>

        <a id="menu-icon" onClick={changeIcon}>
          <i className="bx bx-menu-alt-right"></i>
        </a>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#about">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#experience">
                Experiência
              </a>
            </li>
            <li>
              <a href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#portfolio">
                Portifólio
              </a>
            </li>
            <li>
              <a href="#contacts">
                Contactos
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* HEADER SECTION */}
    </>
  );
};

export default header;
