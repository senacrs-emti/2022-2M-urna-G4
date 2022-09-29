import { SidebarMenu } from '../../components/AsideMenu';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <SidebarMenu />
      {/* <h1>Pagina Home</h1> */}
    </div>
  );
}
