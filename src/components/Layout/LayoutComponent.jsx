import { Outlet } from 'react-router-dom'; // For handling nested routes
import FooterComponent from '../Footer/FooterComponent';
import styles from "./Layout.module.css";

const LayoutComponent = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet /> {/* Displays the current route */}
      </main>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
