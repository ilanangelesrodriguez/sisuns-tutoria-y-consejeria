const mainStudent = () => {
  return (
    <footer className="footer">
      {/* Barra de navegación */}
      <nav className="footer-nav">
        <div className="container_item">
          <a href="#">Inicio</a>
          <a href="#">Blog</a>
          <a href="#">Nosotros</a>
          <a href="#">Contactos</a>
          <a href="#">Reglamento</a>
          <a href="#">Políticas de Privacidad</a>
        </div>
        <div className="container_item">
          <span>ESTE ES DEL MAIN STUDENT</span>
        </div>

        <div className="container_item container_item_logo">
        <img
            src="/images/footer/logo_episi.png"
            alt="Universidad Nacional del Santa"
            className="imagen_universidad"
          />
          <img
            src="/images/footer/logo_rojo.png"
            alt="Universidad Nacional del Santa"
            className="imagen_universidad"
          />
        </div>
      </nav>

      {/* Sección de copyright y redes sociales */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Diseñado por <span className="bold">SISUNS</span> | Copyright © 2024
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/UNSChimbote/?locale=es_LA" className="icon"><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCcCyx2mzVyJrktsFs9IBdGQ" className="icon"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/unschimbote/?hl=es" className="icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default mainStudent;
