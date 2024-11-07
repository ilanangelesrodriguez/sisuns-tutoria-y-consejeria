import styles from "./login.module.css"; // Importa el CSS module
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/student_dashboard");
  };

  return (
    // `${styles.container_item_logo} ${styles.container_item}`
    // "inline_block max_w_lg text_center justify_center"
    <div className={`${styles.inline_block}  ${styles.text_center} ${styles.justify_center}` + " max-w-lg"}>
          <div className={styles.login_container}>
            <h2 className={styles.form_title}>Iniciar Sesión</h2>
            <div className={styles.social_login}>
              <button className={styles.social_button}>
                <img src="/main/uns.png" alt="Uns" className={styles.social_icon}/>
                Continuar con Correo UNS
              </button>
            </div>
              <form action="#" className={styles.login_form}>
                <div className={styles.input_wrapper}>
                  <input type="email" placeholder="Nombre de usuario" className={styles.input_field} required />
                  <img src="/main/email_icon.svg" alt="correouns" />
                </div>
                <div className={styles.input_wrapper}>
                  <input type="password" placeholder="Contraseña" className={styles.input_field} required />
                  <img src="/main/lock_icon.svg" alt="lock" />
                </div>
                <a href="#" className={styles.forgot_pass_link}>¿Olvidó su contraseña?</a>
                <button className={styles.login_button} onClick={handleLogin}>Acceder</button>
              </form>
          </div>
        </div>
  );
};

export default Login;
