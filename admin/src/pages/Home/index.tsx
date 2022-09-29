import { SidebarMenu } from '../../components/Sidebar';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <SidebarMenu />

      <div className={styles.main}>
        <div className={styles.header}>
          <h1>Home</h1>

          <div className={styles.header__user}>
            <p>Pedro</p>
            <img src='https://github.com/olucaspk.png' />
          </div>
        </div>

        <div className={styles.statistics}>
          <h2>Estátisticas</h2>

          <div className={styles.statistics__cards}>
            <div className={styles.statistics__card}>
              <div className={styles.statistics__cardInfo}>
                <h3>Candidatos</h3>
                <p>10 classificados</p>
              </div>
            </div>

            <div className={styles.statistics__card}>
              <div className={styles.statistics__cardInfo}>
                <h3>Partidos</h3>
                <p>10 classificados</p>
              </div>
            </div>

            <div className={styles.statistics__card}>
              <div className={styles.statistics__cardInfo}>
                <h3>Partidos</h3>
                <p>10 integrantes</p>
              </div>
            </div>

            <div className={styles.statistics__card}>
              <div className={styles.statistics__cardInfo}>
                <h3>Partidos</h3>
                <p>10 integrantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
