import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Barra de navegación */}
      <nav className={styles.footer_nav}>
        <div className={styles.container_item}>
          <a href="#">Inicio</a>
          <a href="#">Blog</a>
          <a href="#">Nosotros</a>
          <a href="#">Contactos</a>
          <a href="#">Reglamento</a>
          <a href="#">Políticas de Privacidad</a>
        </div>
        <div className={styles.container_item}>
          <span>Encuentranos en Av. Pacífico 508 - Nuevo Chimbote</span>
        </div>
        {/* "container_item container_item_logo" */}
        <div className={`${styles.container_item_logo} ${styles.container_item}`}>
        <img
            src="/images/footer/logo_episi.png"
            alt="Universidad Nacional del Santa"
            className={styles.imagen_universidad}
          />
          <img
            src="/images/footer/logo_rojo.png"
            alt="Universidad Nacional del Santa"
            className={styles.imagen_universidad}
          />
        </div>
      </nav>

      {/* Sección de copyright y redes sociales */}
      <div className={styles.footer_bottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            Diseñado por <span className={styles.bold}>SISUNS</span> | Copyright © 2024
          </p>
          <div className={`${styles.social_icons}`}>
            <a href="https://www.facebook.com/UNSChimbote/?locale=es_LA" className={styles.icon}><i className="fab fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCcCyx2mzVyJrktsFs9IBdGQ" className={styles.icon}><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/unschimbote/?hl=es" className={styles.icon}><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
