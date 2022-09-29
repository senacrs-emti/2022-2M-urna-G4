import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';
import styles from './styles.module.scss';

export function SidebarMenu() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <img src='https://seeklogo.com/images/S/senac-logo-1041102B11-seeklogo.com.png' />
        <h1>Tribunal Superior Eleitoral</h1>
      </div>

      <ul className={styles.sidebar__items}>
        <li>
          <HiOutlineUser />
          <p>Candidatos</p>
        </li>
        <li>
          <HiOutlineUsers />
          <p>Partidos</p>
        </li>
        <li>
          <RiAdminLine />
          <p>Admins</p>
        </li>
      </ul>
    </div>
  );
}
